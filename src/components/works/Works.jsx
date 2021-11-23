import { useState } from "react";
import "./works.scss";


export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        { 
            id: "1", 
            icon: "./assets/phone.jpg",
            title: "Marketplace Application",
            desc: 
            "A Market Place App for pet lovers to find good quality products for their love pets",
            img: "./assets/project.png",
            link: "https://jobitoalv.herokuapp.com/",

        },
        { 
            id: "2", 
            icon: "./assets/css.png",
            title: "HTML/CSS Portfolio",
            desc: "This is my first ever portfilio and I am so happy to be sharing this jorney with you.",
            img: "./assets/first.png",
            link: "https://job-alvarez.netlify.app/",
        }, 
    ];

    const handleClick = (way)=>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) 
        : setCurrentSlide(currentSlide< data.length - 1 ? currentSlide +1 : 0);
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform:`translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                <div className="container">
                    <div className="item"> 
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon}alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Project</span>
                                <a href={d.link}>Link</a>
                                </div>
                        </div>
                            <div className="right">
                            <img src={d.img} alt=""/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() =>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() =>handleClick("right")}/>
        </div>
    );
}
