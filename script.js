// Variables
const API_URL = "https://dog.ceo/api/breeds/image/random/50"
const mainSection = document.getElementById('main');

// Initial API
getData(API_URL)

// Get API
async function getData(url) {
    console.log("calling");
    const result = await fetch(url)
    const data = await result.json();
    console.log(data.message)
    showPictures(data.message);
}

// Show in Web
function showPictures(images) {
    images.forEach((image) => {
    console.log(image);
    const boxWrapper = document.createElement('div');
    boxWrapper.classList.add('box-dog-wrapper');
    boxWrapper.innerHTML = `
    <img src="${image}" alt="dog">
    `;
    main.appendChild(boxWrapper);
    })
    window.onscroll = function(e) {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            getData(API_URL);
        }
    }
}