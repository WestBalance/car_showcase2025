"use client";
import { CarProps } from "@/types";
import React, { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import {
DialogPanel,
 TransitionChild,
} from "@headlessui/react";
interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="car-details__dialog" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="transition-enter"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-leave"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="car-details__backdrop" />
        </TransitionChild>

        <div className="car-details__container">
          <div className="car-details__inner">
            <TransitionChild
              as={Fragment}
              enter="transition-enter"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition-leave"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="car-details__dialog-panel">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeModal}
                  className="car-details__close-btn"
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>

                {/* Main Image */}
                <div className="car-details__main-image">
                  <Image
                    src="/hero.png"
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                {/* Gallery */}
                <div className="car-details__gallery">
                  {Array(3)
                    .fill(0)
                    .map((_, idx) => (
                      <div className="car-details__gallery-image" key={idx}>
                        <Image
                          src="/hero.png"
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    ))}
                </div>

                {/* Car Info */}
                <div className="car-details__info">
                  <h2 className="car-details__title">
                    {car.make} {car.model}
                  </h2>

                  <div className="car-details__specs">
                    {Object.entries(car).map(([key, value]) => (
                      <div className="car-details__spec" key={key}>
                        <h4 className="car-details__spec-key">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="car-details__spec-value">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
