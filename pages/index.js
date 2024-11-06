// app/page.js
import { useState,useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Modal from "../components/Model"; // Updated import for the Modal
import Layout from "./layout";
import GameCard from "@/components/GameCard";
import games from "@/components/Games";

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [hoveredGame, setHoveredGame] = useState(null);
  const [hoverTimer, setHoverTimer] = useState(null);

  const openModal = (game) => setSelectedGame(game);

  const closeModal = () => {
    setSelectedGame(null);
    setHoveredGame(null);
    clearTimeout(hoverTimer);
  };

  

  const handleGameClick = (game) => {
    openModal(game); // Open modal on click
  };


  return (
    <div class="container2">
    <video
      src="https://video.cloudflare.steamstatic.com/store_trailers/257065848/movie480_vp9.webm?t=1729096120"
      autoPlay
      loop
      muted
      class="background-video"
    >
      Your browser does not support the video tag.
    </video>
    <section class="game-section">
      <div class="game-grid">
        {games.map((game, index) => (
          <div
            key={index}
            class={`game-item ${hoveredGame === game ? 'game-item-hover' : ''}`}
            onClick={() => handleGameClick(game)}
          >
            <img
              src={game.imageUrl}
              alt={game.title}
              class="game-image"
            />
            <h3 class="game-title">{game.title}</h3>
          </div>
        ))}
      </div>
    </section>
  
    {selectedGame && (
        <Modal onClose={closeModal}>
          <div className=" bg-white/5 w-full h-full flex flex-col md:flex-row overflow-auto">
          <div className="absolute left-5 top-5 text-xl text-white ">oneTake</div>  
            {/* Video Section */}
            <div className="w-full md:w-[100%] h-full md:h-full flex lg:mt-0 mt-16">
              <video
                loop
                autoPlay
 
                className="overflow-auto w-full h-full object-contain"
              >
                <source src={selectedGame.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Game Details Section */}
          {/* Game Details Section */}
          <div className="w-full  h-full">
              {/* Pass the selected game data directly to GameCard */}
              <GameCard game={selectedGame} />
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
           
              
              </button>
            </div>
            </div>
        </Modal>
      )}
  </div>
  
  );
};

export default Home;