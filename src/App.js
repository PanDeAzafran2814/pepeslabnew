
import {React , useEffect} from 'react';
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import '../src/assets/font/font-awesome.css'
import routes from './pages';
import Page404 from './pages/404';
import HomeOne from "./pages/HomeOne";

function App() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        }); 
      }, []);

    return (
        <>
            <Header />
            <HomeOne/>
            <Footer />
        </>
    );
}

export default App;
