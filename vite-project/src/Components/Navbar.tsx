import './Navbar.css'

import { Link, useMatch, useResolvedPath } from "react-router-dom";

import logo from "../assets/logo.svg"

const Navbar: React.FC = () => {
    console.log(window.location.pathname)

    function CustomLink({to, children, ...props}) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end : true})
        return (
            <li className = {isActive ? "active" : ""}>
                <Link to = {to} {...props}>
                    {children} 
                </Link>
            </li>
        )
    }
    
    return(
        <nav className = 'navbar'>
            <Link  to = '/' className = 'Title'> 
                <img src={logo} alt="Logo" className="logo" />
                ShiningJourney
            </Link>
            <ul>
                <CustomLink to = "/Pages/Essence.tsx" >Essence</CustomLink>
                <CustomLink to = "/Pages/Pinnacles.tsx" >Pinnacles</CustomLink>
                <CustomLink to = "/Pages/StoryPage.tsx">Reflectory</CustomLink>
                <CustomLink to = "/Pages/Contact.tsx" >Contact</CustomLink>
            </ul>
        </nav>);
}

export default Navbar;
