

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})











const div=document.querySelector('div')
axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML +=   `
        <h2>Title:${item.title}</h2>
        <img width="300" src="${item.image}" alt="product-image"/>
        <h1>Price: ${item.price}</h1>
        <h1>description: ${item.description}</h1>
        <hr>`
    })

}).catch((err)=>{
    console.log(err);
})



try{
    alert('hello world')
}catch(err){
    console.log(err);
}
console.log('consle after alert');