import './App.css';
import blue_ripple_half_right from './assets/blue_ripple_half_right.jpg';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

const navbarLinks = [
  {
    urls: '#',
    title: 'Home'
  },
  {
    urls: '/about',
    title: 'About'
  },
  {
    urls: '/contact',
    title: 'Contact'
  },
]

function App() {
  return (
    <div className="App">
      <NavBar navbarLinks={navbarLinks} />
      <Hero imageSrc={blue_ripple_half_right}/>
      <Footer />
    </div>
  );
}

export default App;
