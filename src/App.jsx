import './App.scss';
import React, { createContext, useEffect, useRef, useState } from 'react';
// import CardsList from './pages/Products/CardsList';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
// import Favorites from './pages/Favorites/Favorites';
// import Cart from './pages/Cart/Cart';
import { useDispatch } from 'react-redux';
// import { setCartList, setFavList } from './store/actions';
// import { addAllItems } from './store/thunk';
// import OrderInfo from './pages/OrderInfo/OrderInfo';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/About/About';


export const ViewContext = createContext();

// const UserProvider = ({ children }) => {
//   const [view, setView] = useState('module');
//   const handleChangeView = (event, nextView) => {
//     if (nextView !== null) {
//       setView(nextView);
//     }
//   };
//   return (
//     <ViewContext.Provider value={{ view, handleChangeView }}>
//       {children}
//     </ViewContext.Provider>
//   )
// }

function App() {

  const aboutRef = useRef();
  const servicesRef = useRef();
  const projectsRef = useRef();
  const contactsRef = useRef();
  const scrollToRef = (e) => {
    // console.log(e.target.id);
    switch (e.target.className) {
      case 'header-nav-item item__about':
        // aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({ behavior: 'smooth', top: aboutRef.current.offsetTop - 90 });
        break;
      case 'header-nav-item item__services':
        // servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({ behavior: 'smooth', top: servicesRef.current.offsetTop - 90 });
        break;
      case 'header-nav-item item__projects':
        // projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({ behavior: 'smooth', top: projectsRef.current.offsetTop - 90 });
        break;
      case 'header-nav-item item__contacts':
        // contactsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({ behavior: 'smooth', top: contactsRef.current.offsetTop - 90 });
        break;
      default: return;
    }
  }
  return (
    <>
      <Header scrollToRef={scrollToRef} />
      <About ref={aboutRef} scrollToRef={scrollToRef} />
      {/* <UserProvider> */}
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
        </Route> */}
      {/* <Route path='/services' element={<Services />} /> */}
      {/* </Routes> */}

      <Services ref={servicesRef} scrollToRef={scrollToRef} />


      {/* </UserProvider> */}
    </>
  );
}

export default App;
