//Pagination

let boxes=document.querySelectorAll('.products-content .box')
 var items = $(".mainContent .products-content");
 var numItems = items.length;
 var perPage = 1;
 items.slice(perPage).hide();

 $('#pagination-container').pagination({
     items: numItems,
     itemsOnPage: perPage,
     prevText: "&lt",
     nextText: "&gt;",
     onPageClick: function (pageNumber) {
      
         var showFrom = perPage * (pageNumber - 1);
         var showTo = showFrom + perPage;
         items.hide().slice(showFrom, showTo).show();
         
         if (pageNumber===1) {
          $('.prev').css('display','none')
          $('.left-head-part p').html(`Showing 1 - ${items[0].querySelectorAll('.box').length} of ${boxes.length} items`)
         } else if(pageNumber===3){
          $('.next').css('display','none')
          $('.prev').css('display','block')
          $('.left-head-part p').html(`Showing ${boxes.length-items[items.length-1].querySelectorAll('.box').length+1} - ${boxes.length} of ${boxes.length} items`)
         }
         else{
          $('.prev').css('display','block')
          $('.left-head-part p').html(`Showing ${items[0].querySelectorAll('.box').length+1} - ${boxes.length-items[items.length-1].querySelectorAll('.box').length} of ${boxes.length} items`)
         }
     }
 });

//Grid

 let filterIcons=document.querySelectorAll('.s-icons')
filterIcons.forEach(icon=>{
  icon.addEventListener('click',function(){
    let active=document.querySelector('.activeIcon')
    active.classList.remove('activeIcon')
    this.classList.add('activeIcon')
  })
})

document.querySelector('#sort-1').addEventListener('click',function(){
  boxes.forEach(box=>{
  box.parentElement.classList.value='col-xl-6 col-lg-4 col-md-4 col-6'
  })
})
document.querySelector('#sort-2').addEventListener('click',function(){
  boxes.forEach(box=>{
  box.parentElement.classList.value='col-xl-4 col-lg-4 col-md-4 col-6'
  })
})
document.querySelector('#sort-3').addEventListener('click',function(){
  boxes.forEach(box=>{
  box.parentElement.classList.value='col-xl-3 col-lg-4 col-md-4 col-6'
  })
})

document.querySelector('#sort-4').addEventListener('click',function(){
  boxes.forEach(box=>{
  box.parentElement.classList.value='col-xl-12 col-lg-4 col-md-4 col-6'
  box.classList.value="box d-flex align-items-center"
  box.querySelector('.box-text').style.textAlign="left"
  box.querySelector('.box-text').style.marginLeft="2rem"
  box.querySelector('.box-text').style.width="100%"
  box.querySelector('.box-text a').classList.value="changedTitle"
  box.querySelector('.b-list').style.left="13%"
  box.querySelector('.b-list').style.bottom="25%"
  })
})