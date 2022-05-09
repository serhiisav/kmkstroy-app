import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Intro from './components/Intro/Intro';
import Gallery from './pages/Gallery/Gallery';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Intro />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
