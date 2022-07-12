import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { missionImageRef } from "../../config/firebase";

const CloudInfraImg = () => {
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
            marginLeft: "0px",
            maxWidth: "100%",
            height: "auto",
          }}
          src={require("../../assests/images/main2.jpeg")}
          alt="Kharyala Trust"
        ></img>
      ) : (
        <Fade bottom duration={1000} distance="50px">
          <img
            style={{
              marginLeft: "0px",
              maxWidth: "100%",
              height: "auto",
            }}
            src={data.urls}
            alt="Kharyala Trust"
          ></img>
        </Fade>
      )}
    </div>
  );
};

export default CloudInfraImg;
