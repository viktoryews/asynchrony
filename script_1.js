const url = 'https://dog.ceo/api/breeds/image/random';

const getData1 = (url) =>
    new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            fetch(url)
                .then((response) => response.json())
                .then((json) => resolve(json))
                .catch((error) => reject(error))
            clearTimeout(timer);
        }, 3000)
    });

const boxContainer = document.querySelector('.container');

try {
    for (let index = 0; index < 12; index++) {
        const data = await getData1(url);
        boxContainer.insertAdjacentHTML('beforeend', `
       <div class='wrapper'>
            <img class='container_image' src="${data.message}">
        </div>
        `)
        console.log('Прошло три секунды');
    }
} catch (error) {
    console.log(error);
};