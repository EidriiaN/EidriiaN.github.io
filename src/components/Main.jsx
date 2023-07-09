import React from "react";

export default function Main() {


    return (

        <div className="main">

            <div className="card">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <h2 className="card-text"><i class="fa-solid fa-globe"></i></h2>
                </a>
                <img className="img-card" src={require("../images/Screenshot_1.png")} alt="img1" />
                
                <a href="https://www.google.com/" target="_blank">
                    <div className="slide-up">
                        <i className="fa-brands fa-github"></i>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <h2 className="card-text"><i class="fa-solid fa-globe"></i></h2>
                </a>
                <img className="img-card" src={require("../images/Screenshot_3.png")} alt="img1" />
                
                <a href="https://www.google.com/" target="_blank">
                    <div className="slide-up">
                        <i className="fa-brands fa-github"></i>

                    </div>
                </a>
            </div>

            <div className="card">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <h2 className="card-text"><i class="fa-solid fa-globe"></i></h2>
                </a>
                <img className="img-card" src={require("../images/Screenshot_5 (1).png")} alt="img1" />
                
                <a href="https://www.google.com/" target="_blank">
                    <div className="slide-up">
                        <i className="fa-brands fa-github"></i>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <h2 className="card-text"><i class="fa-solid fa-globe"></i></h2>
                </a>
                <img className="img-card" src={require("../images/Screenshot_1.png")} alt="img1" />
                
                <a href="https://www.google.com/" target="_blank">
                    <div className="slide-up">
                        <i className="fa-brands fa-github"></i>
                    </div>
                </a>
            </div>

        </div>
    )
}