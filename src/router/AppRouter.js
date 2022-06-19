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
    <BrowserRouter basename="/movie-database">
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<PageHome sort='popular' />} />
              <Route path="/sort/popular" element={<PageHome sort='popular'/>} />
              <Route path="/sort/top-rated" element={<PageHome sort='top_rated'/>} />
              <Route path="/sort/now-playing" element={<PageHome sort='now_playing' />} />
              <Route path="/sort/upcoming" element={<PageHome sort='upcoming' />} />
              <Route path="/movie/:id" element={<PageSolo />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/favourites" element={<PageFavs />} />
            </Routes>
          </main>
        </div>
      <Footer />
    </BrowserRouter>
    </div>
  );

}

export default App;
