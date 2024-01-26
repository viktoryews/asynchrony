const url = 'https://jsonplaceholder.typicode.com/users';

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const containerBox = document.querySelector('.container');

try {
    const data = await getData(url);
    console.log(data);
    data.forEach(el => {
        containerBox.insertAdjacentHTML('beforeend', `
        <div>
        <div class="description"> 
        id: <span>${el.id}</span> <br> 
        name: <span>${el.name}</span> <br> 
        username: <span>${el.username}</span> <br>
        phone: <span>${el.phone}</span> <br>
        email: <span>${el.email}</span> <br>
        street: <span>${el.address.street}</span> <br>
        suite: <span>${el.address.suite}</span> <br>
        city: <span>${el.address.city}</span> <br>
        zipcode: <span>${el.address.zipcode}</span> <br> 
        lat: <span>${el.address.geo.lat}</span> <br> 
        lng: <span>${el.address.geo.lng}</span> <br> 
        company: <span>${el.company.name}</span> <br>
        catchPhrase: <span>${el.company.catchPhrase}</span> <br>
        bs: <span>${el.company.bs}</span> <br><br></div>
        </div>
        `)
    });
    } catch (error) {
        console.log(error);
    };
