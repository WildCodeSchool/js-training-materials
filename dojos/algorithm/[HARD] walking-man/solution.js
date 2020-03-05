//verbose solution:

function squareWalk() {
  const intervalID = setInterval(function() {
    if (config.currentStep < config.totalSteps) {
      if (config.direction === "forwards" || config.direction === "backwards") {
        position.lat =
          config.direction === "forwards"
            ? (position.lat += config.increment)
            : (position.lat -= config.increment);
      } else if (config.direction === "left" || config.direction === "right") {
        position.lng =
          config.direction === "left"
            ? (position.lng += config.increment)
            : (position.lng -= config.increment);
      }
      config.currentStep += 1;
    } else {
      config.currentStep = 0;
      config.direction =
        config.direction === "forwards"
          ? "left"
          : config.direction === "left"
          ? "backwards"
          : config.direction === "backwards"
          ? "right"
          : "forw";
    }

    console.log(position);
  }, 500);
}

squareWalk();
