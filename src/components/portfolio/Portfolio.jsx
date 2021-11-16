import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1> Portfolio </h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Modile App</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/home.png" alt="" />
                    <h3>Dog Gromming Market Place App </h3>
                </div>
                <div className="item">
                    <img src="assets/first.png" alt="" />
                    <h3>My first ever HTML/CSS portfolio </h3>
                </div>
                <div className="item">
                    <img src="assets/ruby.png" alt="" />
                    <h3>Ruby Game The Hangman-game </h3>
                </div>
                <div className="item">
                    <img src="assets/ruby2.png" alt="" />
                    <h3>Terminal dog grooming booking Application </h3>
                </div>
            </div>
        </div>
    )
}
