# lambda-dribbble-grabber

Implement `grabber.js` file with functionality which grabs url and returns following structure (parsed from webpage at given URL):

```
{
    url: 'https://dribbble.com/shots/3133085-A-simple-Contact-Page',
    author: 'Sof Andrade',
    name: 'A simple Contact Page',
    tags: ['contact','faq','landing','mail','phone','ui','ux','website'],
    colors: ['FFFFFF','FBC456','707590','D7D4DB','AAC8D3','F9C9A8','EF7640']
}
```

For gathering information from web use `jsdom` package. Also for promises the `bluebird` package us used.
Targetted node version: 4.3.2

For more example see test folder where you can find example URLs and expected results.

Steps:
 - fork this repository
 - implement `grabber.js`
 - give read access to your repository