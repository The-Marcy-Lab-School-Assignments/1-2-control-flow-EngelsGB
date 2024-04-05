const measureRainSwitch = (inches) => {
  switch (true) {
    case (inches === 0):
      console.log('drought');
      break;
    case (inches < 2):
      console.log('dry');
      break;
    case (inches < 4):
      console.log('average');
      break;
    case (inches < 6):
      console.log('rainy');
      break;
    case (inches >= 6):
      console.log('flood');
      break;
  }
};

const rounderSwitch = (float, rounderSetting) => {
  switch (rounderSetting) {
    case ('up'):
       return Math.ceil(float);
    case ('down'):
        return Math.floor(float);
    case ('honest'):
        return Math.round(float);
  }
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
