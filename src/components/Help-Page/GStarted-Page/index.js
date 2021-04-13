// Dependencies
import React, { Component } from 'react'
import { HashLink as Link } from "react-router-hash-link";
// Intenals
import 'components/Help-Page/GStarted-Page/index.css'
import img1 from 'assets/Cipta_Things-removebg.png'
import img2 from 'assets/tam-wai-POetg8-LiH8-unsplash.jpg'
import img3 from 'assets/tetiana-shyshkina-c6CFeAiydiM-unsplash-removebg-preview.png'
import img4 from 'assets/jorge-ramirez-988-7dFbNlo-unsplash-removebg-preview.png'
import img5 from 'assets/yogesh-rahamatkar-6_z1wEw1dYk-unsplash-removebg-preview.png'

export default class index extends Component {
    render() {
        return (
            <div className="gstarted">
                <div className="container"> 
                    <h6><img src={img1} alt="img"></img><b>Cipta</b>Things.</h6>
                    <h1>Getting Started</h1>
                    <div className="row">
                        <div className="col mt-4">
                            <h4>
                                <span>
                                    Lorem ipsum dolor sit amet, consectur adipiscing elit. Nulla lectus nunc, tempor sed viverra quis, faucibus at quam.
                                </span>
                                <span className="mt-3">
                                    Nullam et laoreet lacus, id sollicitudin neque. Phasellus sollicitudin felis sed mi volutpat, non venenatis erat dignissim.
                                </span>
                            </h4>
                            <Link to="#idMore" className="d-flex justify-content-start">
                                Learn More
                            </Link>
                        </div>
                        <div className="col mt-2">
                            <img src={img2} alt="img2"></img>
                        </div>
                    </div>
                    <hr className="mt-5" />
                    <div className="d-flex justify-content-center border-gstarted" id="idMore">
                        <h2>enlighten you</h2>
                    </div>
                    <div className="row mb-5 d-flex justify-content-center learn-gstarted">
                        <div className="col">
                            <img src={img3} alt="img3" style={{width:'180px'}}></img>
                            <h3><b>Wearable Device</b></h3>
                            <h5>Lorem ipsum dolor sit amet, consectur a dipiscing elit. Maecenas faucibus odio id nisi molestie, quis vehicula iorem gravida. Vesti bulum feugiat uila corper turpis armora lorem ipsum.</h5>
                        </div>
                        <div className="col">
                            <img src={img4} alt="img4" style={{width:'180px'}}></img>
                            <h3><b>Node Sensing</b></h3>
                            <h5>Lorem ipsum dolor sit amet, consectur a dipiscing elit. Maecenas faucibus odio id nisi molestie, quis vehicula iorem gravida. Vesti bulum feugiat uila corper turpis armora lorem ipsum.</h5>
                        </div>
                        <div className="col">
                            <img src={img5} alt="img5" style={{width:'180px'}}></img>
                            <h3><b>Platform</b></h3>
                            <h5>Lorem ipsum dolor sit amet, consectur a dipiscing elit. Maecenas faucibus odio id nisi molestie, quis vehicula iorem gravida. Vesti bulum feugiat uila corper turpis armora lorem ipsum.</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
