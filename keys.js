const glass = { 
    name: 'glass',
    color: 'golden',
    price: 12,
};

const keys = Object.keys(glass);
console.log(keys)

const values = Object.values(glass)
console.log(values);

const pair = Object.entries(glass); // array of array
console.log(pair);

delete glass.name;
console.log(glass)

const {price, ...shortGlass} = glass;
console.log(shortGlass)

// freeze
// Object.freeze(glass); // freeze kore rakhle konokicho add or remove kora jabe na
glass.source = 'Bangladesh';
console.log(glass);

// seal // just update lora jabe