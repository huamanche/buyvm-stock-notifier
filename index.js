const client = require('superagent');
const $ = require('cheerio');

(async () => {
  const resp = await client.get('https://my.frantech.ca/cart.php?gid=39');

  const sliceSel = $('#product3 .package-qty', resp.text);
  const sliceText = sliceSel.text().trim();

  const availableCount = parseInt(sliceText.split(' ')[0], 10);

  console.log('Selector text: %o', sliceText);
  console.log('Inferred count: %o', availableCount);

  if(availableCount > 0) {
    await client.post('https://platform.tillmobile.com/api/send')
      .query({
        username: '<REDACTED>',
        api_key: '<REDACTED>',
      })
      .send({
        phone: ["<REDACTED>"],
        text: "Slice is available dude. Rush, rush, rush!",
      });
  }
})();
