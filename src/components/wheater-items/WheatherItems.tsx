import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faCloudRain, faSnowflake, faWind, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./wheather-items.css";


interface WheatherItemsProps {
  item: {
    temp: number;
    wheather: string;
    time: string;
    iconKey: string; // Restriction ici
  };
}

const icons: Record<string, IconDefinition> = {
  sunny: faSun,
  cloudy: faCloud,
  rainy: faCloudRain,
  snowy: faSnowflake,
  windy: faWind,
};

const WheatherItems: React.FC<WheatherItemsProps> = ({ item }, key:number) => {
  return (
    <div className="wheather-item" key={key}>
      <h2>
        <FontAwesomeIcon icon={icons[item.iconKey]} /> {item.wheather}
      </h2>
      <p className="temp">{item.temp}°C</p>
      <p className="time">{item.time}</p>
    </div>
  );
};

export default WheatherItems;