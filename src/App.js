import Main from '../src/pages/main/main'
import './App.css';
import About from './pages/about/about';
import Gallery from './pages/gallery/gallery';
import Location from './pages/location/location';
import Footer from './pages/footer/footer';

function App() {
  return (
    <div className="App">
      <Main></Main>
      <About></About>
      <Location></Location>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
