import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AuthState from './context/AuthContext';
import MapLocation from './components/MapLocation';
import './style/app.scss';

function App() {
  return (
    <>
      <AuthState>
        <Navbar />
        <Hero />
        <MapLocation />
        <Footer />
      </AuthState>
    </>
  );
}

export default App;
