import React from 'react';
import Header from './js/components/header';
import Footer from './js/components/footer';
import Specialty from './js/components/specialty';
import Review from './js/components/review';
import Menu from './js/components/menu';
import './css/style.css';

function App() {
  return (
    <main>
      <Header></Header>
      <Specialty></Specialty>
      <Menu></Menu>
      <Review></Review>
      <Footer></Footer>
    </main>
  );
}

export default App;
