//verbose solution

function convert_KmPerHr_To_KmPerSec() {
  return 1 / 3600;
}

function convertMinToSecUnix(num) {
  return num * 60;
}

function tooFar(dist, time) {
  time = convertMinToSecUnix(time);
  let distanseCanTravel = time * convert_KmPerHr_To_KmPerSec();
  let fixedTimeMargin = 300 * convert_KmPerHr_To_KmPerSec();
  let distanceCanTravelIfYouRun = distanseCanTravel * 2;
  distanceCanTravelIfYouRun += fixedTimeMargin;

  if (dist > distanseCanTravel) {
    if (dist < distanceCanTravelIfYouRun) {
      return "Only If You Run";
    }
    return false;
  } else return true;
}

console.log(tooFar(0.5, 40));
