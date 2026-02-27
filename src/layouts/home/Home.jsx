import Header from "../../components/header/Header";
import LatestNews from "../../components/latest-news/LatestNews";

const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto py-1.5  my-2">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav></nav>
            <footer></footer>
        </div>
    );
};

export default Home;