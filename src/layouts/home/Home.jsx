import Header from "../../components/header/Header";
import LatestNews from "../../components/latest-news/LatestNews";
import NavBar from "../../components/navBar/NavBar";
import LeftNavBar from "../../components/layout-components/LeftNavBar";
import RightNavBar from "../../components/layout-components/RightNavBar";
import { Outlet } from "react-router-dom";

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
        <aside className="left col-span-3">
          <LeftNavBar></LeftNavBar>
        </aside>
        <section className="main col-span-6">
          main
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-3">
            <RightNavBar></RightNavBar>
        </aside>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
