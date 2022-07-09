import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { mainImageRef } from "../../config/firebase";

const FeelingProud = () => {
  const [data, setData] = useState([]);
  const [dataBool, setDataBool] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(mainImageRef, (snapshot) => {
      snapshot.docs.map((each) => {
        setData(each.data());
        setDataBool(true);
      });
    });
    // fetchingDataFromDb()
    return () => {
      unsub();
    };
  }, [dataBool]);

  return (
    <div>
      {!dataBool && !Object.keys(data).length ? (
        <img
          style={{
            marginTop: "40px",
            marginLeft: "10px",
            height: "400px",
            width: "430px",
          }}
          src={require("../../assests/images/main.png")}
          alt="Kharyala Trust"
        ></img>
      ) : (
        <Fade top duration={2500} distance="60px">
          <img
            style={{
              marginTop: "40px",
              marginLeft: "10px",
              height: "400px",
              width: "420px",
            }}
            src={data.urls}
            alt="Kharyala Trust"
          ></img>
        </Fade>
      )}
    </div>
  );
};

export default FeelingProud;
