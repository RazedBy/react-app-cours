import React from "react";
import './noPage.css'
import error404 from '../../assets/error404.webp';

const NoPage = () => {
    return (
        <div className="container">
            <div className="align-div-center">
                <div>
                <img src={error404} alt="" className="img-404" />
                <h1 className="text-center">Page non trouvé</h1>
                </div>
            </div>
        </div>
    )
}

export default NoPage