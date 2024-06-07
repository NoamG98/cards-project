import React from 'react';
import '../css/AboutPage.css';
import amazonForest from '../assets/amazon-forest.jpg.jpg';
import kapokTree from '../assets/kapok-tree.jpg.jpg';
import heliconia from '../assets/heliconia.jpg';
import conservationEffort from '../assets/conservation-effort.jpg';
import getInvolved from '../assets/get-involved.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <h1>About Our Site</h1>
        <p>
          Our site offers a unique collection of Cards of all kinds. Whether you are creating Cards or browsing through your favorites, we've got you covered. On the "My Cards" page, users can view and manage their created Cards, while the "Favorite Cards" page allows users to keep track of the Cards they love.
        </p>
        <p>
          We strive to provide a seamless and user-friendly experience for all our visitors. Our platform is designed to be intuitive and accessible, ensuring that users can easily navigate and find the tickets they are looking for. We are committed to continuous improvement and welcome any feedback from our users to enhance our services.
        </p>
        <img src={amazonForest} alt="Amazon Forest" className="about-image" />
      </section>

      <section className="about-section">
        <h2>The Amazon and Its Special Plants</h2>
        <p>
          The Amazon rainforest is one of the most biodiverse places on Earth. It is home to thousands of plant species, many of which are not found anywhere else in the world. Our site is dedicated to providing information about these incredible plants and the vital role they play in the ecosystem.
        </p>
        <p>
          From the towering kapok trees to the vibrant heliconias, the Amazon's flora is as diverse as it is beautiful. These plants are not only essential for the environment but also hold significant cultural and medicinal value for the indigenous peoples of the Amazon.
        </p>
        <p>
          The Amazon rainforest acts as a critical carbon sink, helping to mitigate climate change by absorbing large amounts of carbon dioxide. Additionally, many plants in the Amazon have unique properties that are used in traditional medicine and have the potential for new pharmaceutical discoveries.
        </p>
        <p>
          Some notable plants include the rubber tree (Hevea brasiliensis), which is the primary source of natural rubber, and the acai palm (Euterpe oleracea), whose berries are known for their high antioxidant content. These examples highlight the economic and ecological importance of the Amazon's plant life.
        </p>
        <img src={kapokTree} alt="Kapok Tree" className="about-image" />
        <img src={heliconia} alt="Heliconia" className="about-image" />
      </section>

      <section className="about-section">
        <h2>Conservation Efforts</h2>
        <p>
          The Amazon rainforest faces numerous threats, including deforestation, climate change, and illegal logging. Conservation efforts are crucial to preserving this vital ecosystem. Our site aims to raise awareness about the importance of protecting the Amazon and its unique plant life. By learning more about the Amazon, we hope to inspire action and support for conservation initiatives.
        </p>
        <p>
          Several organizations are dedicated to protecting the Amazon rainforest, such as the Amazon Conservation Team (ACT) and the World Wildlife Fund (WWF). These organizations work with local communities to promote sustainable land use practices, reforestation projects, and the protection of endangered species.
        </p>
        <p>
          One of the most effective conservation strategies is the establishment of protected areas and indigenous reserves. These areas help to safeguard biodiversity and support the livelihoods of indigenous peoples who rely on the forest for their cultural and economic well-being.
        </p>
        <p>
          Additionally, promoting the sustainable use of forest resources, such as harvesting non-timber forest products and developing eco-tourism, can provide economic incentives for conservation. Supporting these initiatives can help reduce the pressure on the forest and contribute to its long-term preservation.
        </p>
        <img src={conservationEffort} alt="Conservation Efforts" className="about-image" />
      </section>

      <section className="about-section">
        <h2>Get Involved</h2>
        <p>
          There are many ways you can get involved in protecting the Amazon. From supporting sustainable products to donating to conservation organizations, every little bit helps. Our site provides resources and information on how you can contribute to preserving the Amazon rainforest for future generations.
        </p>
        <p>
          One way to make a difference is by choosing products that are certified by organizations such as the Forest Stewardship Council (FSC), which ensures that the products come from responsibly managed forests. You can also reduce your carbon footprint by supporting companies that practice sustainable sourcing and production.
        </p>
        <p>
          Volunteering with conservation organizations or participating in citizen science projects can also have a positive impact. These activities not only help protect the environment but also provide valuable learning experiences and opportunities to connect with like-minded individuals.
        </p>
        <p>
          Lastly, spreading awareness about the importance of the Amazon and the challenges it faces is crucial. Sharing information with your network, advocating for environmental policies, and educating others about the significance of the rainforest can help build a collective effort towards its conservation.
        </p>
        <img src={getInvolved} alt="Get Involved" className="about-image" />
      </section>
    </div>
  );
};

export default AboutPage;
