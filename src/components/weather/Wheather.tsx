import React from "react";
import './wheather.css';
import WheatherItems from "../wheater-items/WheatherItems";


const Wheather = () => {

    const wheather = [
        {
            city: 'Roubaix',
            details: [
                { id: 1, temp: 12.3, wheather: "Sunny",time:'8h00' ,iconKey: "sunny" },
                { id: 2, temp: 15.0, wheather: "Cloudy",time:'9h00' , iconKey: "cloudy" },
                { id: 3, temp: 10.2, wheather: "Rainy",time:'10h00' , iconKey: "rainy" },
                { id: 4, temp: 18.5, wheather: "Windy",time:'11h00' , iconKey: "windy" },
                { id: 5, temp: 20.3, wheather: "Clear",time:'12h00' , iconKey: "sunny" },
                { id: 6, temp: 5.3, wheather: "Snowy",time:'13h00' , iconKey: "snowy" },
            ]
        }
    ];

    return (
        <div className="card container">
            <h3 className="container-title">Aujourd'hui</h3>
            {wheather.map((item) => (
                <>
                    <p className="container-subtitle" key={item.details[0].id}>{item.city}</p>
                    <div className="wheather-items">
                        {item.details.map((detailsItem) => (
                            <WheatherItems key={detailsItem.id} item={detailsItem} />
                        ))}
                    </div>
                </>
            ))}
        </div>
    );
};

export default Wheather;