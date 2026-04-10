const BAIDU_API_URL = 'http://data.zz.baidu.com/urls?site=https://www.vexiq8009.website&token=d9bYECbIVVYi99L5';

const urlsToPush = [
  'https://www.vexiq8009.website/',
  'https://www.vexiq8009.website/other'
];

async function pushToBaidu() {
  const bodyContent = urlsToPush.join('\n');

  try {
    console.log('Sending URLs to Baidu...');
    console.log(bodyContent);
    console.log('---');

    const response = await fetch(BAIDU_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: bodyContent
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('Push successful!');
      console.log(`Success count: ${result.success}`);
      console.log(`Remaining quota: ${result.remain}`);
      
      if (result.not_same_site && result.not_same_site.length > 0) {
        console.warn('Not same site URLs:', result.not_same_site);
      }
      if (result.not_valid && result.not_valid.length > 0) {
        console.warn('Invalid URLs:', result.not_valid);
      }
    } else {
      console.error('Push failed!');
      console.error(`Error code: ${result.error}`);
      console.error(`Message: ${result.message}`);
    }
  } catch (error) {
    console.error('Network or parsing error:', error.message);
  }
}

pushToBaidu();
