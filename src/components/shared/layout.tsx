import {Outlet} from "react-router-dom";
import Header from "./Header/header"
import Container from "react-bootstrap/Container";
import { myStyle, mainStyle, headerStyle } from "./styles";

const Layout = () => ( 
    <>
        <div style={myStyle}>
            <div style={headerStyle}>
                <Header />
            </div>
            <Container fluid style={mainStyle}>
                <Outlet />
            </Container>
        </div>
    </> 
)

export default Layout;