import Header from "../../components/header/Header";
import LatestNews from "../../components/latest-news/LatestNews";
import NavBar from "../../components/navBar/NavBar";

const Home = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto py-1.5  my-2">
                    <LatestNews></LatestNews>
                </section>
            </header>

            <nav className="w-11/12 mx-auto">
                <NavBar></NavBar>
            </nav>

            <footer></footer>
        </div>
    );
};

export default Home;