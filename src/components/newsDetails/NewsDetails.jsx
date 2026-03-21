import { useLoaderData } from "react-router-dom";


const NewsDetails = () => {
    const data = useLoaderData();
    const {image_url} = data.data[0];
    console.log(image_url);
    return (
        <div>
            News Details
            <img src={image_url} alt="" />
        </div>
    );
};

export default NewsDetails;