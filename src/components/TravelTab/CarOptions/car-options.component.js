import React from 'react';
import CarOptionsCard from './CarOptionsCard/card-options-card.component';

const CarOptions = ({ options, selectedItem, qty, handleSelection }) => {
  const cards = options.map(option => {
    const {
      id,
      rentalCompany,
      make,
      vehicle,
      image,
      type,
      seats,
      rating,
      luggage,
      deal,
      pickUpLocation,
      pricePerDay
    } = option;
    return (
      <CarOptionsCard
        key={id}
        id={id}
        rentalCompany={rentalCompany}
        make={make}
        vehicle={vehicle}
        image={image}
        type={type}
        seats={seats}
        rating={rating}
        luggage={luggage}
        deal={deal}
        pickUpLocation={pickUpLocation}
        pricePerDay={pricePerDay}
        selectedItem={selectedItem}
        qty={qty}
        handleSelection={handleSelection}
      />
    );
  });

  return cards;
};

export default CarOptions;
