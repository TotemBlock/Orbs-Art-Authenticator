import shajs from 'sha.js';

const hashes = [
  '7f2c8f172a071f643789e35194863cd0cc5d9c17fe815af129a5156d25dc8457',
  '7dd4e942fba09f1aaf3c6b6ab554b901d6966c546ea28b05fe33833680c5345f',
  '2a3144e50cf87a7beb51045bace14c1bfff704698a8654d9aa194db126b5fc36',
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

 