const { getChromeDriverVersion } = require('chromedriver-version-matcher');

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

for (let i = 0; i < 3; i++) {
  run(i);
}