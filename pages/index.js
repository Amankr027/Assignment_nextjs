import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Features from '../components/feature';
import Footer from '../components/footer';
import RecentPosts from '../components/RecentPost';
import  Contact  from '../components/contact';



// Import other components as needed

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features/>
      <RecentPosts/>
      <Contact/>
      <Footer/>
      {/* Add other components here */}
    </div>
  );
};

export default HomePage;
