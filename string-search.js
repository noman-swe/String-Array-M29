const products = [
    'Dell harcore i29 200GB laptop',
    'iPone 1TB camera flashlight phone',
    'Yellow laptop with black camera',
    'Dell 1X59 Lenovo Comarcial yega laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'Dell Purple Color phone with Laptop'
];

const searching = 'dell';

// check laptop is here in how many products

// way 01 : check with indexOf
const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}
//console.log(output);

// way 02: includes
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product.toLowerCase());
    }
}
//console.log(output);

// starts with
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product.toUpperCase());
    }
}
//console.log(output);

// ends with
for(const product of products){
    if(product.toLowerCase().endsWith(searching.toLowerCase())){
        output.push(product.toUpperCase());
    }
}
for(const product of products){
    if(product.toLowerCase().endsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);