const products = [
    'Dell harcore i29 200GB laptop',
    'iPone 1TB camera flashlight phone',
    'Yellow laptop with black camera',
    '1X59 Lenovo Comarcial yega laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'Purple Color phone with Laptop'
];

const searching = 'laptop';

// check laptop is here in how many products

// way 01 : check with indexOf
const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product);
    }
}
//console.log(output);

// way 02: includes
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product.toLowerCase());
    }
}
console.log(output);