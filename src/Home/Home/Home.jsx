import Cards from "../../Pages/Card/Cards";
import Testimonials from "../../Pages/Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Banner from "../Header/Banner/Banner";
import Navbar from "../Header/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Cards></Cards>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;