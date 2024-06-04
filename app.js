

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
        <div class="card" style="width: 18rem;"  class="d-flex justify-content-around">
        <img   width="100px" src="${item.image}"  alt="product-image">
        <div class="card-body">
          <h5 class="card-title">Title :${item.title}</h5>
          <p class="card-descripation">descripation:${item.descripation}</p>
          <p class="price">Price:${item.price}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
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













// <div class="card"> <h5 class="title">Title:${item.title}</h5>
// <img width="100" src="${item.image}" alt="product-image"/>
// <h1 class="price">Price: ${item.price}</h1>
// </div>