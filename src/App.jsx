import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';
import Intro from './components/Intro/Intro';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Intro />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
