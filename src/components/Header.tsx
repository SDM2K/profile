import { FC } from "react";
import "./Header.scss";

import LogoLight from "@assets/images/logo-light.png";

const Header: FC = () => {
    return <div className="header bg-2 border-bottom p-2">
        <div className="container">
            <div className="logo"><img src={LogoLight} alt="logo-light" /></div>
        </div>
    </div>
};

export default Header;