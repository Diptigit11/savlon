import React from 'react';

import Header from '../components/Header.jsx';
import Cursor from '../components/Cursor.jsx';
import About from '../components/About.jsx';
import Footer from '../components/Footer.jsx';
import ChatbotEmbed from '../components/ChatbotEmbed.jsx';
import Contact from '../components/Contact.jsx';
import Homes from '../components/Homes.jsx';


// import TwilioSMSComponent from './component/TwilioSMSComponent.jsx';

function Home() {
  return (
      <>
      <Header/>
 <Cursor />
 <Homes />
        {/* <Outlet /> */}
       <About/>
        <Contact/>
        {/* <Email /> */}
        <Footer />
        <ChatbotEmbed />
        {/* <TwilioSMSComponent /> */}
      </>
  
  );
}

export default Home;
