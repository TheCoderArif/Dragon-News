import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const {data} = useLoaderData();
    return (
        <div>
           {data.length} category news found in this category.
        </div>
    );
};

export default CategoryNews;