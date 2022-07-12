import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { missionImageRef } from "../../config/firebase";

const DataScienceImg = () => {
  const [data, setData] = useState([]);
  const [dataBool, setDataBool] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(missionImageRef, (snapshot) => {
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
      {!dataBool ? (
        <img
          style={{
            marginLeft: "20px",
            height: "400px",
            width: "430px",
          }}
          src={require("../../assests/images/themain.jpeg")}
          alt="Kharyala Trust"
        ></img>
      ) : (
        <Fade bottom duration={2000} distance="50px">
          <img
            style={{
              marginLeft: "0px",
              height: "400px",
              width: "430px",
            }}
            src={data.urls}
            alt="Kharyala Trust"
          ></img>
        </Fade>
      )}
    </div>
  );
};

export { DataScienceImg };
