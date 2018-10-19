const { getChromeDriverVersion } = require('chromedriver-version-matcher');
const RUNS = 4;

function run(count) {
  console.log('Run', count, 'start');
  getChromeDriverVersion().then(result => {
    console.log('Run', count, 'success');
    console.log(result);
  }).catch(err => {
    console.log('Run', count, 'error');
    console.error(err);
  });
}

for (let i = 0; i < RUNS; i++) {
  run(i);
}