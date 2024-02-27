import React from 'react';
import { Link } from 'react-router-dom';

const ChatbotEmbed = () => {
  return (
    <div style={{ position: 'fixed', bottom: '4px', right: '4px', zIndex: '9999' }}>
      <Link
        className="inline-flex text-white items-center mx-3 px-2 py-1 font-medium transition-transform duration-300 transform-gpu hover:scale-110 animate__animated animate__zoomIn"
        href="https://pythonchatbotz.streamlit.app/"
        target="_blank"
      >
        <img
          className='hover:animate__animated animate__slideInUp'
          src="https://cdn3.iconfinder.com/data/icons/chat-bot-emoji-filled-color/300/141453384Untitled-3-1024.png"
          alt="Chatbot Icon"
          style={{ width: '70px', height: '65px' }}
        />
      </Link>
    </div>
  );
};

export default ChatbotEmbed;
