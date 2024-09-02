async function apidata(){
    let data = await  fetch("https://dummyjson.com/carts")
    let data1 = await data.json()
    console.log(data1.carts)
}
apidata()