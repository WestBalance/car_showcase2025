"use client";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card">
      {/* Title */}
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      {/* Rent Price */}
      <p className="car-card__price">
        <span className="car-card__price-dollar">$</span>
        {carRent}
        <span className="car-card__price-day">/day</span>
      </p>

      {/* Car Image */}
      <div className="car-card__image-container">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="car-card__image"
        />

        {/* Overlay Button */}
        <div className="car-card__btn-overlay">
          <CustomButton
            title="View More"
            containerStyles="car-card__btn"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Car Info */}
      <div className="car-card__icons">
        <div className="car-card__icon">
          <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
          <p className="car-card__icon-text">{transmission === "a" ? "Automatic" : "Manual"}</p>
        </div>
        <div className="car-card__icon">
          <Image src="/tire.svg" width={20} height={20} alt="drive" />
          <p className="car-card__icon-text">{drive?.toUpperCase()}</p>
        </div>
        <div className="car-card__icon">
          <Image src="/gas.svg" width={20} height={20} alt="mpg" />
          <p className="car-card__icon-text">{city_mpg} MPG</p>
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
