import shajs from 'sha.js';

const hashes = [
  'b1b1a3bda0f48230359f23ab25bc0e45627f3779db6081bb50f29e5213b2163e',
  '676d5219245790e65cc65760e06870c07207c5a098ad9ef1d45a4cdcefe9a1f2',
  'c60fed0eb450a1398aed40b3f983bfbf9e9db9ead8faf987446b53041169e27f',
];

const getBase64Image = (img) => {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg|jpeg|pdf);base64,/, "");
}

const calculateHash = (data) => shajs('sha256').update(data).digest('hex');

document.querySelectorAll('img')
.forEach(image => {
    const thisImagesHash = calculateHash(getBase64Image(image));
    console.log(image.src);
    console.log(thisImagesHash);
    if (hashes.includes(thisImagesHash)) {
        image.style.border = '5px solid gold'
    }
});

 