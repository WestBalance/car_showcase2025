import cars from "@/carData.json";
import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps): Promise<CarProps[]> {
  const { manufacturer, year, model, fuel, limit } = filters;

  let result = cars as CarProps[];

  // Фильтр по manufacturer
  if (manufacturer) {
    result = result.filter((car) =>
      car.make.toLowerCase().includes(manufacturer.toLowerCase())
    );
  }

  // Фильтр по model
  if (model) {
    result = result.filter((car) =>
      car.model.toLowerCase().includes(model.toLowerCase())
    );
  }

  // Фильтр по fuel
  if (fuel) {
    result = result.filter((car) =>
      car.fuel_type.toLowerCase() === fuel.toLowerCase()
    );
  }

  // Фильтр по year
  if (year) {
    result = result.filter((car) => car.year === Number(year));
  }

  // Ограничение лимита
  if (limit) {
    result = result.slice(0, limit);
  }

  return result;
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

export const updateSearchParams=(type:string,value:string) =>{
 const searchParams = new URLSearchParams(window.location.search);  
        searchParams.set(type, value)
        const newPathname=`${window.location.pathname}?${searchParams.toString()}`
return newPathname
}