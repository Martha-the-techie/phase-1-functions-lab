function distanceFromHqInBlocks(pickupLocation) {
  const hq = 42;
  return Math.abs(hq - pickupLocation);
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(destination - start);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination);
  let fare = 0;

  if (feet <= 400) {
    fare = 0;
  } else if (feet > 400 && feet <= 2000) {
    fare = (feet - 400) * 0.02;
  } else if (feet > 2000 && feet < 2500) {
    fare = 25;
  } else if (feet >= 2500) {
    return 'cannot travel that far';
  }

  return fare;
}

