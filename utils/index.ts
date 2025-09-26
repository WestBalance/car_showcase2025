
export  async function fetchCars() {
    const headers ={
        'x-rapidapi-key': '367f16c4admsh6aaa05a8639c5d1p18df37jsn5e49f3726f60',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    

    const response =  await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
});

const result= await response.json();
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