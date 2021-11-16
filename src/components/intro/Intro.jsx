import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
              <div className="imgContainer">
                  <img src="assets/job.jpeg" alt=""/>
              </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I`m </h2>
                    <h1>Job Alvarez Chow</h1>
                    <h3>A <span>Full-stack Developer</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>

            </div>
        </div>
    )
}
