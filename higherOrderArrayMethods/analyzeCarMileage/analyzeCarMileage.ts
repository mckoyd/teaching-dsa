interface Car {
  make: string;
  model: string;
  year: number;
  mileage: number;
}

interface CarAnalysis {
  averageMileage: number;
  highestMileageCar: Car;
  lowestMileageCar: Car;
  totalMileage: number;
}

export const analyzeCarMileage = (cars: Car[]): CarAnalysis => {
  const totalMileage = cars.reduce(
    (mileageSum, { mileage }) => mileageSum + mileage,
    0
  );
  const averageMileage = totalMileage / cars.length;
  const highestMileage = Math.max(...cars.map(({ mileage }) => mileage));
  const lowestMileage = Math.min(...cars.map(({ mileage }) => mileage));

  const highestMileageCar = cars.filter(
    ({ mileage }) => mileage === highestMileage
  )[0];
  const lowestMileageCar = cars.filter(
    ({ mileage }) => mileage === lowestMileage
  )[0];

  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
};
