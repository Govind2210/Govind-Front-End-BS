import React from "react";
import { useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import HomePage from "./HomePage";


function Ships() {
  const [data, setData] = useState([]);
  const [active , setActive] = useState('')
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/ships").then((res) => {
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
          <input className="inputSerach" onChange={event => {setActive(event.target.value)}} type="text" placeholder="Search by Active" />
          <input className="inputSerach" onChange={event => {setActive(event.target.value)}} type="text" placeholder="Search by ship_name" />
          <input className="inputSerach" onChange={event => {setActive(event.target.value)}} type="text" placeholder="Search by Launch" />
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
                else if(item.active){
                  return item
                }
              })
              .map((item) => {
                return (
                  <div className="card">
                    <h1>Ship Name: {item.ship_name}</h1>
                    <h3>Active:{item.active}</h3>
                    <h3>year: {item.year_built}</h3> 
                    <h3>Weight: {item.weight_lbs}</h3>
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

export default Ships;
