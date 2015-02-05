// ES6
'use strict';

function sleep(msec) {
  return new Promise(function(resolve, reject){
    setTimeout(resolve, msec);
  });
}

sleep(1000).then(function(){
  console.log('wake!');
});