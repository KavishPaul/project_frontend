import React, { useState } from 'react';
import './Tour.css'; // Import your CSS file for styles
import BookingPage from './TourBookingPage'; // Assuming BookingPage is in the same directory

const TravelPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const cityTemplates = [
    {
      city: 'Delhi',
      description: 'Explore the historical landmarks and vibrant culture of Delhi.',
      price: 100 // Base price for Delhi
    },
    {
      city: 'Mumbai',
      description: 'Experience the bustling city life and iconic landmarks of Mumbai.',
      price: 120 // Base price for Mumbai
    },
    {
      city: 'Jaipur',
      description: 'Discover the rich heritage and royal palaces of Jaipur.',
      price: 125 // Base price for Jaipur
    },
    {
      city: 'Goa',
      description: 'Relax on beautiful beaches and enjoy the vibrant nightlife in Goa.',
      price: 135 // Base price for Goa
    },
    {
      city: 'Varanasi',
      description: 'Experience spirituality and ancient traditions in Varanasi.',
      price: 150 // Base price for Varanasi
    },
    {
      city: 'Agra',
      description: 'Visit the iconic symbol of love, the Taj Mahal, in Agra.',
      price: 120 // Base price for Agra
    },
    // Add other city data with their respective base prices
  ];

  const handleCityClick = (index) => {
    setSelectedCity(cityTemplates[index]);
  };

  return (
    <div className="travel-page-container">
      <h2 className="page-title text-3xl pb-4 ml-3">Explore Cities in India</h2>
      {selectedCity ? (
        <BookingPage city={selectedCity.city} basePrice={selectedCity.price} />
      ) : (
        <div className="city-grid">
          {cityTemplates.map((city, index) => (
            <div key={index} className="city-card" onClick={() => handleCityClick(index)}>
              <h3 className="city-name">{city.city}</h3>
              <p className="city-description">{city.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TravelPage;