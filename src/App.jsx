import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Solutions from './components/Solutions';
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
        <Solutions />
        <Footer />
      </AuthState>
    </>
  );
}

export default App;
