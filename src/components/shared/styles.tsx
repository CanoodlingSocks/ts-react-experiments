import { CSSProperties } from "react";
import bgImage from "./wallpaper.jpg";

//------------- Layout Styles ------------------

export const myStyle: CSSProperties = {
    backgroundImage: `url(${bgImage})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const mainStyle: CSSProperties = {
    height: `calc(100vh - 0px)`, // subtract height of Navbar
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0,
  };

export const headerStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, 
};
//---------------------------------------------
