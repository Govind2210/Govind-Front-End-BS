import React from "react";
import { useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import HomePage from "./HomePage";


function MainPage() {
  const [data, setData] = useState([]);
  const [status , setStatus] = useState('')

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules").then((res) => {
      console.log(res);
      res.json().then((result) => {
        console.log(result);
        setData(result);
      });
    });
  }, []);

  return (
    <>
    <NavBar/>
    <HomePage/>
      <div className="div-search">
        <div className="searching">
          <input className="inputSerach" onChange={event => {setStatus(event.target.value)}} type="text" placeholder="Search by status" />
          <input className="inputSerach" onChange={event => {setStatus(event.target.value)}} type="text" placeholder="Search by Launch" />
          <input className="inputSerach" onChange={event => {setStatus(event.target.value)}} type="text" placeholder="Search by type" />
        </div>
      </div>
      <div className="realData">
        <section>
          <div className="conatiner">
            <div className="cards">
              {data.filter((item)=>{
                if(item == ""){
                  return item
                }
                else if (item.status.toLowerCase().includes(status.toLowerCase())){
                  return item
                }
              })
              .map((item) => {
                return (
                  <div className="card">
                    <h1>Name: {item.capsule_serial}</h1>
                    <h3>Statue:  {item.status}</h3>
                    <h3>Launch unix:{item.original_launch_unix}</h3>
                    <h3>Launch: {item.original_launch}</h3>
                    <h3>Details: {item.details}</h3>   
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MainPage;
