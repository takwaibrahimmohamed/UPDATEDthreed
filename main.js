  
let toggleBtn=document.querySelector(".toggleBtn")
let hide_display=document.querySelectorAll(".hide_display")
let case_page =document.querySelector(".case-page")
let moredetals =document.querySelectorAll(".moredetals")
let popUpMoreDetails =document.querySelectorAll(".popUpMoreDetails")
let popUpOverlay=document.querySelectorAll(".popUpOverlay")
let close=document.querySelectorAll(".popUpOverlay .close")

let popUpclick=document.querySelectorAll(".popUpclick")
hide_display.forEach((item)=>{
    toggleBtn.addEventListener("click",()=>{

        item.style.display="flex"
    })
})


popUpMoreDetails.forEach((item,i)=>{
    item.href=`./ntlp/cases/ntp.html?id=${i+1}`

  })
// moredetals.forEach((item,i)=>{
//     item.href=`./ntlp/cases/ntp.html?id=${i+1}`
   
//   })



// popUpclick.forEach((item,i)=>{
// item.addEventListener(('click'),()=>{
    // item.parentElement=`./ntlp/cases/ntp.html?id=${i+1}`
  
   
    // popUpOverlay[i].style.opacity="1"
    // popUpOverlay[i].style.visibility="visible"
    // popUpOverlay[i].style.zIndex="9999"
// })
// })
// close.forEach((item,i)=>{
// item.addEventListener(('click'),()=>{
//     popUpOverlay[i].style.opacity="0"
//     popUpOverlay[i].style.visibility="hidden"
//     popUpOverlay[i].style.zIndex=""
// })
// })
 
  
// popUp.filterCompany
let popUpfilterSideMenu=document.querySelectorAll(".filterCompany .filterSideMenu .filterCart")
let closeFilterPuoUp=document.querySelector(".closeFilterPuoUp")
let filterPopupOverlay=document.querySelector(".filterPopup")
let filterPopupContent=document.querySelector(".filterPopup .filterPopupContent")
let popUpMainContent=document.querySelector(".popUpMainContent")
closeFilterPuoUp.addEventListener(('click'),()=>{
    filterPopupOverlay.style.opacity="0"
    filterPopupOverlay.style.visibility="hidden"
    filterPopupOverlay.style.zIndex="0"
//    filterPopupContent.style.bottom="100vh"
})
popUpfilterSideMenu.forEach((item,i)=>{
    item.addEventListener(('click'),()=>{

        fetch('PopUp.json')
        .then(response=>response.json())
        .then(data =>{
            products=data
            showProduct()
        })
        function showProduct(){
            products.map((product)=>{
                 let {id,header,title,industry,country,teamSize,duration,budjet,technology}=product
          if(id == i+1){
            popUpMainContent.innerHTML=`
            <h3> ${header}</h3>
            <p class="filterPopupTitle">${title}</p>
            <div class="filterPopupRow">
            <div class="filterPopupCell">
                <h6>industry</h6>
                <p>${industry}</p>
            </div>
            <div class="filterPopupCell">
                <h6>country</h6>
                <p>${country}</p>
            </div>
            <div class="filterPopupCell">
                <h6>team Size</h6>
                <p>${teamSize}</p>
            </div>
            <div class="filterPopupCell">
                <h6>duration</h6>
                <p>${duration}</p>
            </div>
            <div class="filterPopupCell">
            <h6>budget</h6>
            <p>${budjet}</p>
            </div>
            </div>
            <div class="filterPopupteqhnology">
            <h6>Technologies</h6>
            <p>${technology}</p>
            </div>
            `
          }
                  
            })
         
        }
        filterPopupOverlay.style.opacity="1"
        filterPopupContent.style.bottom="50%"
        filterPopupContent.style.transform="translatY(50%)"
        filterPopupOverlay.style.visibility="visible"
        filterPopupOverlay.style.zIndex="113"
       
    
    })
})
// let nonedata = document.querySelector(".nonedata")
// let noneBtn = document.querySelectorAll(".noneBtn")
// noneBtn.forEach((item)=>{
//   item.addEventListener(("click"),()=>{
//     if(nonedata.style.display == "none"){
//       nonedata.style.display="flex"
//     }
    
//   })
// })



// start filter 
let btnItem=document.querySelectorAll(".filterButtons button")
let filterCart=document.querySelectorAll(".filterSideMenu .filterCart")
btnItem.forEach((btn)=>{
  btn.addEventListener(('click'),()=>{
    btnItem.forEach((btn)=>{
      btn.className=""
    })
    btn.className="active"
    let value=btn.textContent
 
  
    
    filterCart.forEach((cart)=>{
     cart.style.display="none"
     if(cart.getAttribute('data-filter') == value || value=="all"){
     
      cart.style.display="flex"
      // nonedata.style.display="none"
     }
    })
   
    // if(value.includes( "Aviation")  ||value.includes( "Manufacturing")){
    //   console.log("nonedata2")
   
    //   nonedata.style.display="flex"
    // }
    
  })
})
// end filter 