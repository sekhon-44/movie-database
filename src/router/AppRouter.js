import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageSolo from "../pages/PageSolo";
import PageFave from "../pages/PageFave";

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route paht="/movie/:id" element={<PageSolo />}></Route>
            <Route path="/about" element={<PageAbout />} />
            <Route path="/favourites" element={<PageFave />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
