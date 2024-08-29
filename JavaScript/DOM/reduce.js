const mypro = [
    {
        name: "Pant",
        category: "Cloths",
        price: 250
    },
    {
        name: "T-Shirt",
        category: "Cloths",
        price: 350
    },
    {
        name: "Shoes",
        category: "Footwear",
        price: 1050
    },
    {
        name: "Sleeper",
        category: "Footwear",
        price: 159
    },
    {
        name: "Bag",
        category: "Bag",
        price: 559
    },
    {
        name: "Bag",
        category: "Bag",
        price: 559
    },
    {
        name: "Bag",
        category: "Bag",
        price: 559
    },
    {
        name: "Bag",
        category: "Bag",
        price: 559
    },
    {
        name: "Bag",
        category: "Bag",
        price: 559
    },
    {
        name: "Bag",
        category: "Bag",
        price: 559
    },
    {
        name: "Bag",
        category: "Bag",
        price: 559
    },
    {
        name: "Bag",
        category: "Bag",
        price: 559
    },

    {
        name: "Bag",
        category: "Bag",
        price: 559
    }
 
];

let data = mypro.reduce((totalbill, data1) => {
    return totalbill + " => " + " " + data1.name + " " + data1.price 
})

console.log(data)