import NavMain from "./NavMain";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Header() {
    return (
        <div className="nav-bar">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>

            <NavMain />
        </div>
    )
}
export default Header