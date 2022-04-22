import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import MapPage from './components/MapPage';
import './style/app.scss';
import AuthState from './context/AuthContext';
import Page403 from './components/403';
import Page404 from './components/404';

function App() {
  return (
    <>
      <AuthState>
        <Routes>
          <Route path={`/`} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="map" element={<MapPage />} />
          </Route>
          <Route path={`/403`} element={<Page403 />} />
          <Route element={<Page404 />} /> {/* ! todo doesnt work  */}
        </Routes>
      </AuthState>
    </>
  );
}

export default App;
