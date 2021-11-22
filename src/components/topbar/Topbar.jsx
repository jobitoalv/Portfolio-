import "./topbar.scss";
import {Person} from "@material-ui/icons"

export default function Topbar({ meunOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (meunOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Jobito.</a>
                
                      <div className="itemContainer" >
                        <Person className="icon" />
                        <span> +61 434 234 214 </span>
                      </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick = {() => setMenuOpen(!meunOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
             </div>

        </div>
    )
}
