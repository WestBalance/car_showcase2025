import { CarProps } from "@/types";
import cars from '@/carData.json';
export  async function fetchCars() {
    return cars;
}

export const calculateCarRent = (city_mpg:number, year:number) => {
    const numericCityMpg =
        typeof city_mpg === "string" ? parseFloat(city_mpg) : city_mpg;
    const numericYear = typeof year === "string" ? parseInt(year) : year;

    if (isNaN(numericCityMpg) || isNaN(numericYear)) {
        return "50"; 
    }

    const basePricePerDay = 70;
    const mileageFactor = 0.5;
    const ageFactor = 0.025;

    const mileageRate = numericCityMpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - numericYear) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle? : string) =>{
    const url = new URL('https://cdn.imagin.studio/getimage')
}