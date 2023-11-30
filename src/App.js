import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Menus from "./Menus/Menus";
import Listings from "./Listings/Listings";
import Products from "./Products/Products";
import Sale from "./Sale/Sale";
import Daily from "./Daily/Daily";
import Testimonial from "./Testimonial/Testimonial";
import Top from "./Top/Top";
import News from "./News/News";
import Footer from "./Footer/Footer";
import Copyright from "./Copyright/Copyright";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import CreatePizzaForm from "./CreatePizzaForm/CreatePizzaForm";
import PizzaDetails from "./PizzaDetails/PizzaDetails";
import CreateUser from "./CreateUser/CreateUser";
import LoginPage from "./LoginPage/LoginPage";
import IndividualUser from "./IndividualUser/IndividualUser";
import ProductsList from "./ProductsList/ProductsList";
import ReviewPage from "./ReviewPage/ReviewPage";
import ReviewList from "./ReviewList/ReviewList";
import CreatePost from "./CreatePost/CreatePost";
import PostList from "./PostList/PostList";
import PostPage from "./PostPage/PostPage";
import Return from "./Return/Return";
import Terms from "./Terms/Terms";
import Contact from "./Contact/Contact";
import Map from "./Map/Map";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/r3"
          element={[
            <Navbar />,
            <Hero />,
            <Menus />,
            <Listings />,
            <Products />,
            <Sale />,
            <Daily />,
            <Testimonial />,
            <Top />,
            <News />,
            <Footer />,
            <Copyright />,
          ]}
        ></Route>

        {/* <Route path={`/register`} element={[<Register />]}></Route> */}
        {/* <Route path={`/login`} element={[<LoginForm />]}></Route> */}
        {/* <Route path={`/create-pizza`} element={[<CreatePizzaForm />]}></Route> */}
        <Route path="/r3/create" element={[<CreatePizzaForm />]} />
        <Route path="/r3/create-user" element={[<CreateUser />]} />
        <Route path="/r3/log-in" element={[<LoginPage />]} />
        <Route path="/r3/create-post" element={[<CreatePost />]} />
        <Route path="/r3/review" element={[<ReviewPage />]} />

        <Route path="/r3/pizza/:pizzaId" element={[<PizzaDetails />]} />
        <Route path="/r3/user/:name" element={[<IndividualUser />]} />
        <Route path="/r3/post/:id" element={[<PostPage />]} />

        <Route path="/r3/products" element={[<ProductsList />]} />
        <Route path="/r3/testimonial" element={[<ReviewList />]} />
        <Route path="/r3/post" element={[<PostList />]} />
        <Route path="/r3/return-policy" element={[<Return />]} />
        <Route path="/r3/terms-of-use" element={[<Terms />]} />
        <Route path="/r3/contact" element={[<Contact />]} />

        <Route path="/r3/website-map" element={[<Map />]} />
      </Routes>
    </div>
  );
}

export default App;
