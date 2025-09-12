
function calculateDistance() {
  const initialSpeed = 30; 
  const maxSpeed = 120;    
  const totalTimeMin = 96; 
  const speedDoublingInterval = 10;

  let currentSpeed = initialSpeed;
  let distance = 0;
  let timePassed = 0;x8

  while (timePassed < totalTimeMin) {
    let timeForInterval = Math.min(speedDoublingInterval, totalTimeMin - timePassed);
    let timeInHours = timeForInterval / 60;
    distance += currentSpeed * timeInHours;
    timePassed += timeForInterval;
    currentSpeed = Math.min(currentSpeed * 2, maxSpeed);
  }

  return distance;
}

const totalDistance = calculateDistance();
console.log(`Total distance traveled: ${totalDistance.toFixed(2)} km`);
