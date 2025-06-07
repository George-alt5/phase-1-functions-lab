function distanceFromHqInBlocks(PickupLocation) {
  const HqLocation = 42;
  return Math.abs(PickupLocation - HqLocation)
}
function distanceFromHqInFeet(PickupLocation) {
const HqLocation = 42;
const FeetPerBlock = 264;
const distanceInBlocks = Math.abs(PickupLocation - HqLocation);
const distanceInFeet = distanceInBlocks * FeetPerBlock;
return distanceInFeet;
}

function distanceTravelledInFeet(startLocation, endLocation) {
const FeetPerBlock = 264;
const distanceInBlocks = Math.abs(endLocation - startLocation);
return distanceInBlocks * FeetPerBlock;
}
 function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  if (distance <=400) {
    return 0;
  }
  else if (distance >=400 && distance <=2000) {
return (distance - 400) * 0.02;
  }
  else if (distance >2000 && distance <=2500) {
    return 25;
  }
  else if (distance >=2500)
    return 'cannot travel that far'

 }


