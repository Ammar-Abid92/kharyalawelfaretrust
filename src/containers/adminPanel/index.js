import React, { useState } from "react";
import {
  uploadFilesToStorage,
  saveDataToFirestore,
} from "../../config/firebase";

// import "./index.css";

function AdminPanel() {
  const [description, setDescription] = useState("");
  const [folderName, setFolderName] = useState("");
  const [images, setImages] = useState([]);

  const uploadFile = async () => {
    try {
      const urls = await uploadFilesToStorage(images, folderName);
      const response = await saveDataToFirestore(folderName, description, urls);
      console.log("url from component", urls);
      console.log("resp ----> ", response);

      alert("Successfully Posted");
      return urls;
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <div>
        <h1>update your website</h1>
        <br />
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />

        <br />

        <input type="file" onChange={(e) => setImages(e.target.files)} />
        <input
          placeholder="mainImage/missionImage"
          onChange={(e) => setFolderName(e.target.value)}
        />
        <br />

        <div className="submitButt">
          <button onClick={uploadFile}>Submit</button>
        </div>
      </div>
    </div>
  );
}
export { AdminPanel };
