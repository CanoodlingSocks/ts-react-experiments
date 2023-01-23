import {Outlet} from "react-router-dom";
import Header from "./Header/header"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bgImage from "./wallpaper.jpg";

const myStyle={
    backgroundImage: `url(${bgImage})`,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const Layout = () => ( 
        <>
        <div style={myStyle}>
        <Header />
            <Outlet />
        </div>
 
        </> 
)

export default Layout;