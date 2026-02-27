import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="py-2 flex gap-2 items-center justify-center bg-base-300 text-xl">
            <p className="bg-[#D72050]  text-white p-1.5 ">Latest</p>
            <Marquee className="space-x-10" pauseOnHover={true} speed={80}>
                <Link  to='/news' className="mx-3">
                Lorem ipsum dolor 
                </Link>
                
                <Link  to='/news' className="mx-3">
                Lorem ipsum dolor 
                </Link>
                
                <Link  to='/news' className="mx-3">
                Lorem ipsum dolor 
                </Link>
                
            </Marquee>
        </div>
    );
};

export default LatestNews;