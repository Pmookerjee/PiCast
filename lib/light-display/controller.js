'use strict';

const forecast = require('./forecast');
const temperature = require('./temperature');
const rpio = require('rpio');

//button is on pin 37
rpio.open(37, rpio.INPUT, rpio.PULL_DOWN);
  
//listen for button press
let watcher = (pin) => {

  let button = rpio.read(pin) ? 'pressed' : 'released';
  console.log('Button event on P%d (button currently %s)', pin, button);

  if(button === 'released') {

    console.log('something happened'); 

    //grab the most recent weather data from mongo
    //send respective data to display modules
    require('../find-newest')()
      .then(data => {
        console.log('data is ', data);
        forecast(data.forecast);
        temperature(data.temperature);
      })
    .catch(err => { throw err; });    

  }

};
  
rpio.poll(37, watcher);




