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

            <main className="py-6 w-11/12 mx-auto grid md:grid-cols-12 gap-3">
                <aside className="left col-span-3"> left aside </aside>
                <section className="main col-span-6">Main</section>
                <aside className="right col-span-3">right</aside>
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;