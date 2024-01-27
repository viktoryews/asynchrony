const url = 'https://dog.ceo/api/breeds/image/random';

const getData1 = async (url) => {
    const resp = await fetch(url);
    const data1 = resp.json();
    return data1;
};
const body = document.querySelector('body');
const boxContainer = document.querySelector('.container');


// try {
//     for (let index = 0; index < 12; index++) {
//         const data = await getData1(url);
//         console.log(data);
//         boxContainer.insertAdjacentHTML('beforeend', `
//        <div class='wrapper'>
//         <img class='container_image' src="${data.message}">
//         </div>
//         `)
//         setInterval(data, 9000);
//     }
// } catch (error) {
//     console.log(error);
// };


try {
    for (let index = 0; index < 12; index++) {
        const data = await getData1(url);
        console.log(data);
        boxContainer.insertAdjacentHTML('beforeend', `
       <div class='wrapper'>
        <img class='container_image' src="${data.message}">
        </div>
        `)
        
    }
} catch (error) {
    console.log(error);
};