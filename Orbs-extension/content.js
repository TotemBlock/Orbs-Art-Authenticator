const hashes = [
  'b1b1a3bda0f48230359f23ab25bc0e45627f3779db6081bb50f29e5213b2163e',
  '676d5219245790e65cc65760e06870c07207c5a098ad9ef1d45a4cdcefe9a1f2',
  'c60fed0eb450a1398aed40b3f983bfbf9e9db9ead8faf987446b53041169e27f',
];

const onClick = function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(file);
  var sha256 = require('sha256');
  var hash = sha256.create();
  hash.update('RESULT', reader.result);
  console.log(hash);
};

document.ready = () => {
  document.querySelector('#theUploadButton')
    .click = onClick;

  document.querySelectorAll('img')
  .forEach(image => {
      const thisImagesHash = FileReader.reader.result(image.toString());
      if (hashes.includes(thisImagesHash)) {
          image.style('border', '1px solid gold');
      }
  });
};
 