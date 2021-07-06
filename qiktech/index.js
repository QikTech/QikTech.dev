import LocomotiveScroll from 'locomotive-scroll';
import './css/main.css'

const scroll = new LocomotiveScroll({
     el: document.querySelector('[data-scroll-container]'),
     smooth: true
 });
