import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AuthState from './context/AuthContext';
import './style/app.scss';

function App() {
  return (
    <>
      <AuthState>
        <Navbar />
        <Hero />
        {/* <Map />
        <Causes />
        <Solutions />
        <Substancs /> */}
        <Footer />
      </AuthState>
    </>
  );
}

export default App;
