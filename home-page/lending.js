let Allproducts = document.querySelectorAll(".product-detatils")
let products = document.querySelector(".products")
let highlight = document.querySelector(".highlight")
let mostLovedproduct = document.querySelectorAll(".product-list")
window.addEventListener("DOMContentLoaded",()=>{
    fetch("http://localhost:3000/products/")
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        for (let a = 0; a < data.length; a++) {
            //create div for product details
            let  product_details = document.createElement("div")
            product_details.setAttribute("class","product-detatils")
            
            //create div for heartdiv icon
            let heartDiv =  document.createElement("div")
            heartDiv.setAttribute("class","heart")
            heartDiv.innerHTML = `<i class="fa-regular fa-heart"></i>`
            product_details.appendChild(heartDiv)
            
            //product imges
            let product_img = document.createElement("img")
            product_img.setAttribute("class","product-img")
            product_img.setAttribute("src",data[a].images)
            product_details.appendChild(product_img)
            
            // element for brand 
            let brand = document.createElement("p")
            brand.innerHTML = `<a>${data[a].brand}</a>`
            brand.setAttribute("class","brand")
            product_details.appendChild(brand)
            
            // element for model_name 
            let model_name = document.createElement("p")
            model_name.innerText = `${data[a].series}`
            model_name.setAttribute("class","model-name")
            product_details.appendChild(model_name)
            
            // element for price
            let price_rate = document.createElement("h6")
            price_rate.innerHTML = `${data[a].price}<span class="discount">${data[a].discount}</span><span class="offer">${data[a].offer}</span>`
            price_rate.setAttribute("class","price-rate")
            product_details.appendChild(price_rate)
            
            // element for trend
            let trend = document.createElement("p")
            trend.setAttribute("class","trend")
            trend.innerHTML = `<a class="trending">Treanding</a>`
            product_details.appendChild(trend)
            
            //append product div to products
            products.appendChild(product_details)
        }
        for(let i=0;i<4;i++){
            console.log(data[i])
            let mostDiv = document.createElement("div")
            mostDiv.setAttribute("class","loved-list")
            
            let heartDiv = document.createElement("div")
            heartDiv.setAttribute("class","heart")
            heartDiv.innerHTML = `<i class="fa-regular fa-heart"></i>`
            
            mostDiv.appendChild(heartDiv)
            
            let product_list = document.createElement("div")
            product_list.setAttribute("class","product-list")
            mostDiv.appendChild(product_list)
            
            
            let most_love_img = document.createElement("img")
            most_love_img.setAttribute("src",data[i].images)
            product_list.appendChild(most_love_img)
            
            let brand =  document.createElement("p")
            brand.setAttribute("class","brand")
            brand.innerHTML = `<a>${data[i].brand}</a>`
            product_list.appendChild(brand)
            
            let price = document.createElement("p")
            price.setAttribute("class","price-rate")
            price.innerHTML = `${data[i].price}<span class="discount">${data[i].discount}</span><span class="offer">${data[i].offer}</span>`
            product_list.appendChild(price)
            
            highlight.appendChild(mostDiv)
        }
    }).catch((error)=>console.log(error))
})

//addEventlisterner for filter

let filterIcon = document.querySelector(".filler-icon")
let filterDiv = document.querySelector(".filter")
filterIcon.addEventListener("click",()=>{
    filterDiv.classList.toggle("show")
})