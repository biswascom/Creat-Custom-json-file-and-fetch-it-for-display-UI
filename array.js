const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };
// const newProduct = [{ name: 'webcam', price: 700, brand: 'Lal' }];

// copy products array and then add newProduct 

const newProducts = [...products, newProduct];
// const newProducts = [...products, ...newProduct];
// console.log(newProducts);

// create a new array without one specific item 
// remove phone means create a new array without the phone

const remaining = products.filter(p => p.name !== 'phone');
// console.log(remaining);
// console.log(products);

// const arr = [22, 34, 34, 55, 6, 66, 467, 75];
// const newRemovedArr = arr.filter(element => element !== 34);
// console.log(arr);
// console.log(newRemovedArr); 

const productsJSON = JSON.stringify(products);
// console.log(productsJSON);

const productsObj = JSON.parse(productsJSON);
// console.log(productsObj);

function load() {
    fetch('info.json')
        .then(res => res.json())
        .then(data => displayFetch(data))
};

const displayFetch = data => {
    const ul = document.getElementById('display');
    for (let product of data) {
        // console.log(product);
        const li = document.createElement('li');
        li.innerText = `${product.name}`;
        ul.appendChild(li);
    };
};

load();