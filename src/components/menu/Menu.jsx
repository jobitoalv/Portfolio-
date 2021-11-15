import "./menu.scss"

export default function Menu({ meunOpen, setMenuOpen }) {
    return(
        <div className={"menu "+(meunOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#works">Projects</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </div>
    )
}