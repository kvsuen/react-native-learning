import React from 'react';
import HotelOptionsCard from './HotelOptionsCard/hotel-options-card.component';

const HotelOptions = ({ options }) => {
  const cards = options.map((option, index) => {
    const {
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
        key={index}
        name={name}
        image={image}
        rating={rating}
        stars={stars}
        tag={tag}
        deal={deal}
        walkDistance={walkDistance}
        pricePerNight={pricePerNight}
      />
    );
  });

  return cards;
};

export default HotelOptions;
