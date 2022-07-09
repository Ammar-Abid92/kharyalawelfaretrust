// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  getDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getDatabase, set, get, child } from "firebase/database";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtjlYwROjcna7zB0fs8An070_l0dPpavw",
  authDomain: "kharyala-b0e04.firebaseapp.com",
  projectId: "kharyala-b0e04",
  storageBucket: "kharyala-b0e04.appspot.com",
  messagingSenderId: "185606683014",
  appId: "1:185606683014:web:0d60f019744f2f06ded407",
  measurementId: "G-9EXG9S0VNE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
//db connection
const db = getFirestore();
const storage = getStorage();
const database = getDatabase();

const mainImageRef = collection(db, "mainImage");
const missionImageRef = collection(db, "missionImage");

// Below code is for authentication as well as storing data in firestore using .then

// async function register(email, password, fullname, phoneNumber) {
//     return new Promise((res, rej) => {
//       try {
//         createUserWithEmailAndPassword(auth, email, password).then((result) => {
//           const uid = result.user.uid;
//           setDoc(doc(db, "RegisteredUsers", uid), {
//             email,
//             fullname,
//             phoneNumber,
//           });
//           alert("Registered Successfully");
//           res(true);
//         });
//       } catch (e) {
//         rej(e);
//       }
//     });
//   }

let globUser = null;

async function login(email, password) {
  const userObj = await signInWithEmailAndPassword(auth, email, password);
  globUser = userObj.user.uid;
  const user = await getDoc(doc(db, "LoggedInUsers", userObj.user.uid));
  return user;
}
async function saveDataToFirestore(folderNameInDb, description, urls) {
  onAuthStateChanged(auth, (user) => {
    console.log("COLLECTION--->", folderNameInDb);
    if (user) {
      var uid = user.uid;
      setDoc(doc(db, `${folderNameInDb}`, uid), {
        description,
        urls,
      }).then(() => console.log("dataSaved"));
    } else {
      console.log("Not found");
    }
  });
  return true;
}

// const savingDataToRealTimeDb = (folderNameInDb, description, urls) => {
//   if (globUser) {
//     console.log("kajsclknascna===>", folderNameInDb)
//     set(ref(database, `${folderNameInDb}/` + globUser), {
//       description: description,
//       imageUrls: urls
//     });
//   } else {
//     console.log("User Not found");
//   }
// }

// async function uploadImagesToStorage(files) {
//   let urls = [];
//   for (let i = 0; i < files.length; i++) {
//     const storageRef = ref(storage, `/sell/${files[i].name}`);
//     const response = await uploadBytes(storageRef, files[i]);
//     const url = await getDownloadURL(response.ref);
//     urls.push(url);
//   }

//   return urls;
// }

async function uploadFilesToStorage(files, folderNameInDb) {
  let urls = [];
  for (let i = 0; i < files.length; i++) {
    const storageRef = ref(storage, `/${folderNameInDb}/${files[i].name}`);
    const response = await uploadBytes(storageRef, files[i]);
    const url = await getDownloadURL(response.ref);
    urls.push(url);
  }
  return urls;
}
// async function uploadProfileToStorage(file) {
//   const storageRef = ref(storage, `/profile/${file.name}`);
//   const response = await uploadBytes(storageRef, file);
//   const url = await getDownloadURL(response.ref);

//   return url;
// }

// const getRealTimeMainImageData = () => {
// const dbRef = ref(database);
// get(child(dbRef, "mainImage")).then((snapshot) => {
//   if (snapshot.exists()) {

//     console.log("jjjjjjjjjjj---->",snapshot.val());
//     return snapshot.val()
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
// }

// const gettingRealTimeData = () => {
// const unsub = onSnapshot(doc(db, "mainImage", "SF"), (doc) => {
//   console.log("jajajajajaj---->", doc.data())
// });
// }

async function getMainImageData() {
  const querySnapshot = await getDocs(collection(db, "mainImage"));
  const mainImageData = [];
  querySnapshot.forEach((doc) => {
    mainImageData.push({ ...doc.data(), id: doc.id });
  });
  return mainImageData;
}
async function getMissionImageData() {
  const querySnapshot = await getDocs(collection(db, "missionImage"));
  const missionImageData = [];
  querySnapshot.forEach((doc) => {
    missionImageData.push({ ...doc.data(), id: doc.id });
  });
  return missionImageData;
}

export {
  login,
  uploadFilesToStorage,
  saveDataToFirestore,
  getMissionImageData,
  getMainImageData,
  // savingDataToRealTimeDb,
  // gettingRealTimeData,
  mainImageRef,
  missionImageRef,
  //   uploadProfileToStorage,
};
