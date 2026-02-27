import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const SocialFind = () => {
    return (
        <div className="mt-3">
            <h2 className="font-semibold text-start">Find Us On</h2>
            <div className="flex flex-col *:w-full *:mb-2">
                <button className="btn justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn justify-start"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn justify-start"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default SocialFind;