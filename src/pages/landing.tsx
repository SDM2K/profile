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
        <div className="profile-image border border-color-2 border-2 mb-13 pointer-events-none">
            <img src={ProfileImage} alt="poster" />
        </div>
        <div className="intro-block container mt-4">
            <b className="text-center mx-auto d-block font-8 intro-name">Shashi Kumar D M</b>
            <p className="text-center mt-0 mx-auto intro-desc">
                Expertised in designing, developing, and optimizing complex

                software solutions. My proficiency spans across various technolo-
                gies and methodologies, enabling me to deliver high-quality,

                scalable, and innovative solutions to meet diverse business needs.
            </p>
        </div>
    </div>
};

export default Landing;
