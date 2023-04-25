let Allproducts = document.querySelectorAll(".product-detatils")

let mostLovedproduct = document.querySelectorAll(".product-list")
window.addEventListener("DOMContentLoaded",()=>{
    fetch("http://localhost:3000/products/")
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        for (let a = 0; a < data.length; a++) {
            for(let a=0;a<Allproducts.length;a++){
                Allproducts[a].children[1].src = data[a].images
                Allproducts[a].children[2].innerText = data[a].brand
                Allproducts[a].children[3].innerText= data[a].series
                Allproducts[a].children[4].innerHTML= `${data[a].price}<span class="discount">${data[a].discount}</span><span class="offer">${data[a].offer}</span>`
            }
            for(let p=0;p<mostLovedproduct.length;p++){
                mostLovedproduct[p].children[0].src = data[p].images;
                mostLovedproduct[p].children[1].children[0].innerText =data[p].brand
                mostLovedproduct[p].children[2].innerHTML =`${data[a].price}<span class="discount">${data[a].discount}</span><span class="offer">${data[a].offer}</span>`
            }
        }
    }).catch((error)=>console.log(error))
})
