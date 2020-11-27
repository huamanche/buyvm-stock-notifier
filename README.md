# Can't grab a BuyVM slice 'cause it's out of stock?
A'ight. I gotcha covered in golden!

1. Get yourself a free Till Mobile account. Either on [their website](https://tillmobile.com) or via [Heroku addons marketplace](https://elements.heroku.com/addons/till).
2. Open up repository settings, and put your phone number (in [E.123](https://en.wikipedia.org/wiki/E.123#Example_formats) international notation, e.g. +905555555555) and Till Mobile credentials as GitHub Actions secrets.
   ![Screenshot from 2020-11-27 11-48-44](https://user-images.githubusercontent.com/41230766/100429641-a8d27000-30a6-11eb-8701-53f7c33fc479.png)
3. Modify the `index.js` as per your needs.
   * You'd probably want to edit 5th and 7th lines.
   * 5th line is currently for Luxembourg category.
   * 7th line is currently for `#product3`, which is `LU E3-KVM 2GB`.
4. Enable Actions if disabled in repository settings.
5. Let it run and text you when it's time to grab your slice!
