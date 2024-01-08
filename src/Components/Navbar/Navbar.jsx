import {Link} from "react-router-dom"
import ROUTES from "../routes/routes"
import './Navbar.scss'

export default function Navbar() {
  return (
    <header className="Navbar">
   <h1>Furni shop</h1>
        <ul>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li>
              <Link to={ROUTES.FEATURES}>Features</Link>
            </li>
            <li>
              <Link to={ROUTES.CONTACT}>Contact</Link>
            </li>
        </ul>
    </header>
  )
}
