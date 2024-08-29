const myarr = [
               
    { brand: "Toyota", model: "Corolla", year: 2022, color: "blue", horsepower: 140 },
    { brand: "Honda", model: "Civic", year: 2021, color: "red", horsepower: 158 },
    { brand: "Ford", model: "Mustang", year: 2023, color: "black", horsepower: 310 },
    { brand: "Chevrolet", model: "Camaro", year: 2022, color: "yellow", horsepower: 275 },
    { brand: "BMW", model: "3 Series", year: 2022, color: "white", horsepower: 255 },
    { brand: "Mercedes-Benz", model: "C-Class", year: 2023, color: "silver", horsepower: 255 },
    { brand: "Audi", model: "A4", year: 2023, color: "gray", horsepower: 201 },
    { brand: "Tesla", model: "Model 3", year: 2022, color: "green", horsepower: 283 },
    { brand: "Volkswagen", model: "Golf", year: 2021, color: "blue", horsepower: 147 },
    { brand: "Subaru", model: "Impreza", year: 2022, color: "red", horsepower: 152 },
    { brand: "Hyundai", model: "Elantra", year: 2023, color: "black", horsepower: 147 },
    { brand: "Kia", model: "Forte", year: 2022, color: "silver", horsepower: 147 },
    { brand: "Mazda", model: "Mazda3", year: 2021, color: "white", horsepower: 155 },
    { brand: "Nissan", model: "Sentra", year: 2023, color: "gray", horsepower: 149 },
    { brand: "Volvo", model: "S60", year: 2022, color: "blue", horsepower: 250 },
    { brand: "Toyota", model: "Corolla", year: 2022, color: "blue", horsepower: 140 },
    { brand: "Honda", model: "Civic", year: 2021, color: "red", horsepower: 158 }
]

let data = myarr.filter((car)=>{
    return car.color === "blue"
})
console.log(data)