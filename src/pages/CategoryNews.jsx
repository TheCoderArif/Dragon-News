import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/newsCard/NewsCard";

const CategoryNews = () => {
    const {data:news} = useLoaderData();
    return ( 
        <div className="flex flex-col justify-start ">
            <div className="font-semibold justify-start">Dragon News Home</div>
           <div>{news.length} category news found in this category.</div>

            {/* <NewsCard news={news}></NewsCard> */}
            {
                news.map(singleNews => <NewsCard news={singleNews}></NewsCard>)
            }

        </div>
    );
};

export default CategoryNews;