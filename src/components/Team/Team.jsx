import React, { useEffect, useState } from "react";
import { useData } from "../../hooks/useData";

import "./team.css";

const Team = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   console.log("running effect");
  //   let ignore = false;

  //   fetch(`https://api.sampleapis.com/countries/countries`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       if (!ignore && Array.isArray(json)) {
  //         setData(json.slice(0,8));
  //       } else {
  //         console.error("API did not return an array:", json);
  //         setData([]);
  //       }
  //     });

  //   return () => {
  //     ignore = true;
  //     console.log("effect cleanup - component unmounted/re-rendered");
  //   };
  // }, []);

  
const data=useData(`https://api.sampleapis.com/countries/countries`,[]);

// if (!Array.isArray(data) || data.length === 0) {
//   return <p>Loading data or no data found...</p>;
// }

// get the activity from the json or show error message if failed


  return (
    <>
      <section className="team background">
        <div className="container">
          <div className="content mtop grid3">
            {data.map((val) => (
              <div className="box" key={val.id}>
                <button className="btn3">{val.capital} Capital</button>
                <div className="details">
                  <div className="img">
                    <img src={val.media?.emblem} alt="" />
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <i className="fa fa-location-dot"></i>
                  <label  style={{ color: "#101010" }}>{val.abbreviation}</label>
                  <h4 style={{ color: "#101010" }}>{val.name}</h4>
                  <ul style={{ color: "#101010" }}>
                    <li ><i className="fa-brands fa-facebook-f" ></i></li>
                    <li><i className="fa-brands fa-linkedin"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                  </ul>
                  <div className="button flex">
                    <button className="b1">
                      <i className="fa fa-envelope"></i> Message
                    </button>
                    <button className="btn4">
                      <i className="fa fa-phone-alt"></i> Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
