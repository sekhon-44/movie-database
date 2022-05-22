import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../compenents/Header';
import Footer from '../compenents/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFave';
import PageSolo from '../pages/PageSolo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/movie/:id" element={<PageSolo />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/favourites" element={<PageFavs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;
