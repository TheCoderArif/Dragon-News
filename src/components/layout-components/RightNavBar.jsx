import SocialFind from "../socialFind/SocialFind";
import SocialLogin from "../socialLogin/SocialLogin";


const RightNavBar = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <SocialFind></SocialFind>
        </div>
    );
};

export default RightNavBar;