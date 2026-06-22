const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = [
    'Closeup of a human eye',
    'Rock that looks like a wave',
    'Purple and white pansies',
    'Section of wall from a pharaoh\'s tomb',
    'Large moth on a leaf'
];

/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
   const newImage = document.createElement('img');
   newImage.setAttribute('src', `images/${imageFilenames[i]}`);
   newImage.setAttribute('alt', altTexts[i]);
   addEventListener('click', function(e) {
        displayedImage.setAttribute('src', e.target.src);
        displayedImage.setAttribute('alt', e.target.alt);
   });
    thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
