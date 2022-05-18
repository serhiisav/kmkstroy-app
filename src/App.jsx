import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
// import About from './pages/About/About';
// import Services from './pages/Services/Services';
// import Intro from './components/Intro/Intro';
// import Gallery from './pages/Gallery/Gallery';
// import Partners from './pages/Partners/Partners';
// import Contacts from './pages/Contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAllImages } from './store/thunk';
import ErrorPage from './pages/ErrorPage/ErrorPage';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAllImages());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          {/* <Route path='home' element={<Intro />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='partners' element={<Partners />} />
          <Route path='contacts' element={<Contacts />} /> */}
        </Route>
        <Route exact={true} path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
