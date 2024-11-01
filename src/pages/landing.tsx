import { FC } from "react";
import "./landing.scss";

const Landing: FC = () => {
    return <div className="landing-page bg-2">
        <div className="poster py-13">
            <div className="poster_content">
                <img src="/assets/images/logo-light.png" alt="logo-light" />
            </div>
        </div>
        <div className="profile-image border border-color-2 border-2">
            <img src="/assets/images/profile-square.jpg" alt="poster" />
        </div>
    </div>
};

export default Landing;
