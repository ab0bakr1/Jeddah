import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Component/Header/Header';
import './App.css';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <>
    <Header />
    </>
  );
}

export default App;
