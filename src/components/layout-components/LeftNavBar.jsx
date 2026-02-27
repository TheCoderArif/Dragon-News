import { useEffect, useState } from "react";

const LeftNavBar = () => {
    const [catagories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[]);
    return (
        <div>
            <h2 className="font-semibold mb-2 ">All Categories ({catagories.length})</h2>
            <div className="flex flex-col">
                {
                    catagories.map(category => <button className="btn mx-5 mb-2" key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNavBar;