import { useState } from "react";
import "./works.scss";


export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<  - 1 ? currentSlide +1 : 0)   
    };
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform:`translateX(-${currentSlide * 100}vw)` }}>
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/phone.jpg" alt=""/>
                                </div>
                                <h2>MarketPlace App</h2>
                                <p>A Market Place App for pet lovers to find good quality products for their love pets</p>
                                <span>Website</span>
                                <a href="https://jobitoalv.herokuapp.com/">FluffyTals Marketplace Link  </a>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/project.png" alt=""/>
                        </div>
                    </div>
                </div>      
            </div>
            <div className="slider"style={{ transform:`translateX(-${currentSlide * 100}vw)` }}>
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/css.png" alt=""/>
                                </div>
                                <h2>HTML/CSS Portfolio</h2>
                                <p>This is my first ever portfilio and I am so happy to be sharing this jorney with you.</p>
                                <span>Website</span>
                                <a href="https://job-alvarez.netlify.app/">Job Alvarez Chow first portfolio</a>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/first.png" alt=""/>
                        </div>
                    </div>
                </div>      
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() =>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() =>handleClick("right")}/>
        </div>
    )
}
