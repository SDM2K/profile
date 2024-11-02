import { FC } from "react";
import "./landing.scss";

import ProfileImage from "@assets/images/profile-square.jpg";
import LogoLight from "@assets/images/logo-light.png";

const Landing: FC = () => {
    return <div className="landing-page bg-2">
        <div className="poster py-13">
            <div className="poster_content">
                <img src={LogoLight} alt="logo-light" />
            </div>
        </div>
        <div className="profile-image border border-color-2 border-2">
            <img src={ProfileImage} alt="poster" />
        </div>
    </div>
};

export default Landing;
