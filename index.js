const { getChromeDriverVersion } = require('chromedriver-version-matcher');

getChromeDriverVersion().then(result => console.log(result)).catch(err => console.error(err));