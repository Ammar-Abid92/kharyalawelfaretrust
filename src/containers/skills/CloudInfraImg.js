import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { missionImageRef } from "../../config/firebase";
import Carousel from "react-bootstrap/Carousel";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
    <Fade bottom duration={2000} distance="20px">
    <Carousel
      style={{
        marginLeft: "30px",
        height: "auto",
        maxWidth: "80%",
        borderRadius: "15px"
      }}
    >
      <Carousel.Item>
        <img
          style={{
            height: "450px", width: "100%", borderRadius: "15px"
          }}
          src={require("../../assests/images/main2.jpeg")}
          alt="Kharyala"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            height: "450px", width: "100%", borderRadius: "15px"
          }}
          src={require("../../assests/images/camp3.jpeg")}
          alt="Kharyala"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            height: "450px", width: "100%", borderRadius: "15px"
          }}
          src={require("../../assests/images/camp4.jpeg")}
          alt="Kharyala"
        />
      </Carousel.Item>
    </Carousel>
  </Fade>
    // <div>
    //   {!dataBool ? (
    //     <img
    //       style={{
    //         marginLeft: "0px",
    //         maxWidth: "100%",
    //         height: "auto",
    //         borderRadius: "15px"
    //       }}
    //       src={require("../../assests/images/main2.jpeg")}
    //       alt="Kharyala Trust"
    //     ></img>
    //   ) : (
    //     <Fade bottom duration={1000} distance="50px">
    //       <img
    //         style={{
    //           marginLeft: "0px",
    //           maxWidth: "100%",
    //           height: "auto",
    //           borderRadius: "15px"
    //         }}
    //         src={data.urls}
    //         alt="Kharyala Trust"
    //       ></img>
    //     </Fade>
    //   )}
    // </div>
  );
};

export default CloudInfraImg;
