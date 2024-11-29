import React, { useEffect, useState } from "react";
import './home.css';
import Wheather from "../weather/Wheather";
import Search from "../search/Search";

function Home(){
  
    const data = [
        "Roubaix",
        "Lille",
        "Lys-lez-lanois",
        "Wasquhal",
        "Tourcoing",
        "Paris",
        "Marseille",
      ];
      
    return (
        <>
            <div className="card container">
                <h3 className="container-title">Bienvenue !</h3>
                <p className="container-text">
                    Bienvenue sur le site internet de test React pour les cours !  Le projet à commencé le 25 nov. 2024 et présentera une application web pour   voir la situation météorologique choisi. 
                </p>
            </div>
            <Wheather />
            <Search placeholder="Search city..." data={data} />
        </>
    )
}

export default Home