const client = require('superagent');
const $ = require('cheerio');

(async () => {
  // gid=37 ==> Las Vegas - AMD RYZEN KVM
  // gid=38 ==> New York - AMD RYZEN KVM
  // gid=39 ==> Luxembourg - AMD RYZEN KVM
  const resp = await client.get('https://my.frantech.ca/cart.php?gid=45');

  // #product1 ==> RYZEN KVM 512MB
  // ...
  // #product3 ==> RYZEN KVM 2GB
  // ...
  // #product11 ==> RYZEN KVM 32GB
  const sliceSel = $('#product7 .package-qty', resp.text);
  const sliceText = sliceSel.text().trim();

  let availableCount = parseInt(sliceText.split(' ')[0], 10);
  
  // Sanity check for unspecified number of available stock.
  // This rarely happens to LU region. Grab as many slices as you can!
  if(sliceSel.length == 0) {
    availableCount = Infinity;
  }

  console.log('Selector text: %o', sliceText);
  console.log('Inferred count: %o', availableCount);

  if(availableCount > 0) {
    console.log('Sending SMS...');
    
    await client.post('https://platform.tillmobile.com/api/send')
      .query({
        username: process.env.TILL_ID,
        api_key: process.env.TILL_KEY,
      })
      .send({
        phone: [process.env.PHONE_NUMBER],
        text: "Slice is available dude. Rush, rush, rush!",
      });
  }
})();
