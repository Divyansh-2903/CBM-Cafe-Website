const https = require('https');

https.get('https://www.justdial.com/Jaipur/Chicks-Burger-More-Jhotwara/0141P1414ST8929494_BZDET/photos', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const regex = /https:\/\/images\.jdmagicbox\.com\/[^\s"']+\.jpg/g;
    const matches = data.match(regex);
    if (matches) {
      console.log([...new Set(matches)].slice(0, 5).join('\n'));
    } else {
      console.log('No matches found');
    }
  });
}).on('error', (err) => {
  console.log('Error: ', err.message);
});
