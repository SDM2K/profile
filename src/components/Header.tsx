import { FC } from "react";
import "./Header.scss";

const Header: FC = () => {
    return <div className="header bg-1 border-bottom p-2">
        <div className="logo"><img src="/assets/images/logo-light.png" alt="logo-light" /></div>
    </div>
};

export default Header;