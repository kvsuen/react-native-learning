import React from 'react';
import HotelOptionsCard from './HotelOptionsCard/hotel-options-card.component';

const HotelOptions = ({ options, selectedItem, qty, handleSelection }) => {
  const cards = options.map(option => {
    const {
      id,
      name,
      image,
      rating,
      stars,
      tag,
      deal,
      walkDistance,
      pricePerNight
    } = option;
    return (
      <HotelOptionsCard
        key={id}
        id={id}
        name={name}
        image={image}
        rating={rating}
        stars={stars}
        tag={tag}
        deal={deal}
        walkDistance={walkDistance}
        pricePerNight={pricePerNight}
        selectedItem={selectedItem}
        qty={qty}
        handleSelection={handleSelection}
      />
    );
  });

  return cards;
};

export default HotelOptions;
