import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from '../src/ui/app/App'
import $ from 'jquery';

// console.log(66);
// $(document).ready(function(){
//   console.log(666);
//   $('.js--scroll-to-education').click(function(){
//     console.log(7);
//     $('html, body').animate({scrollTop: $('.section-education').offset().top}, 1000);
//   })
// })



function App() {
  return (
    <MainPage/>
  );
}

export default App;
