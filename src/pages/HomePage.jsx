import React, { useEffect, useState } from 'react';
import { getUser } from '../users/services/localStorageService';
import '../css/HomePage.css';
import CardCarousel from './components/CardCarousel';

import amazonForest from '../assets/amazon-forest.jpg.jpg';
import kapokTree from '../assets/kapok-tree.jpg.jpg';
import heliconia from '../assets/heliconia.jpg';
import conservationEffort from '../assets/conservation-effort.jpg';
import acaiPalm from '../assets/acai-palm.jpg';
import giantWaterLily from '../assets/giant-water-lily.jpg';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [cardData, setCardData] = useState([]); 

  useEffect(() => {
    const userData = getUser();
    setUser(userData);
    if (!userData) {
      document.body.style.overflow = 'hidden'; 
    }

    const fetchedCardData = [
      { title: 'Amazon Forest', image: amazonForest, description: 'The vast Amazon Rainforest' },
      { title: 'Kapok Tree', image: kapokTree, description: 'The majestic Kapok Tree' },
      { title: 'Heliconia', image: heliconia, description: 'The vibrant Heliconia flower' },
      { title: 'Conservation Efforts', image: conservationEffort, description: 'Efforts to conserve the rainforest' },
      { title: 'Acai Palm', image: acaiPalm, description: 'The Acai Palm tree' },
      { title: 'Giant Water Lily', image: giantWaterLily, description: 'The Giant Water Lily of the Amazon' }
    ];
    setCardData(fetchedCardData);
  }, []);

  const handleLoginRedirect = () => {
    window.location.href = '/login'; 
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1>The World of Special Plants</h1>
      </header>

      <section className="info-section">
        <h2>Explore the Amazon's Diversity</h2>
        <p>
          "The sheer diversity and beauty of the Amazon Rainforest is unlike anything I've ever seen. It's a world of its own." - Jane Goodall
        </p>
        <p>
          The Amazon Rainforest, often referred to as the lungs of the Earth, is a vast and vibrant ecosystem teeming with life. It covers over 5.5 million square kilometers and is home to an estimated 390 billion individual trees and 16,000 species.
        </p>
        <p>
          Our website offers a unique collection of tickets of all kinds. Whether you are creating tickets or browsing through your favorites, we've got you covered.
        </p>
        <p>
          1. The website contains cards of all kinds.
        </p>
        <p>
          2. Those who prepare a card will be able to look at their card on the My Cards page.
        </p>
        <p>
          3. Whoever clicks like on a card will be able to view it on the Favorite Cards page.
        </p>
        <img src={amazonForest} alt="Amazon Forest" className="info-image" />
        <p>
          For more information about the site, please visit our <a href="/about">About Page</a>.
        </p>
      </section>

      <section className="cards-section">
        {cardData.length > 0 ? <CardCarousel /> : <p>Loading cards...</p>}
      </section>

      <section className="plant-varieties-section">
        <h3>Varieties of Plants in the Amazon</h3>
        <div className="plant-grid">
          <div className="plant-card">
            <img src={kapokTree} alt="Kapok Tree" className="plant-image" />
            <p>Kapok Tree (Ceiba pentandra)</p>
            <a href="https://en.wikipedia.org/wiki/Ceiba_pentandra" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
          <div className="plant-card">
            <img src={heliconia} alt="Heliconia" className="plant-image" />
            <p>Heliconia (Heliconia rostrata)</p>
            <a href="https://en.wikipedia.org/wiki/Heliconia" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
          <div className="plant-card">
            <img src={acaiPalm} alt="Acai Palm" className="plant-image" />
            <p>Acai Palm (Euterpe oleracea)</p>
            <a href="https://en.wikipedia.org/wiki/A%C3%A7a%C3%AD_palm" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
          <div className="plant-card">
            <img src={giantWaterLily} alt="Giant Water Lily" className="plant-image" />
            <p>Giant Water Lily (Victoria amazonica)</p>
            <a href="https://en.wikipedia.org/wiki/Victoria_amazonica" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
          <div className="plant-card">
            <img src={conservationEffort} alt="Conservation Efforts" className="plant-image" />
            <p>Conservation Efforts</p>
            <a href="https://www.worldwildlife.org/initiatives/forests" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
          <div className="plant-card">
            <img src={amazonForest} alt="Amazon Forest" className="plant-image" />
            <p>Amazon Forest</p>
            <a href="https://en.wikipedia.org/wiki/Amazon_rainforest" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        </div>
      </section>

      {!user && (
        <div className="popup">
          <p>To continue exploring the site, please log in or register.</p>
          <button onClick={handleLoginRedirect}>Log In / Register</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
