//Header Part

$('#head-search').click(function(){
  $('.toggleSearch').fadeToggle(100)
});
$('#loginRegister').click(function(e){
  e.preventDefault()
  $('.allForms').fadeToggle(100)
});
$('.create').click(function (e) {
  e.preventDefault()
  this.parentElement.parentElement.classList.remove('activeForm')
  document.querySelector('#Register').classList.add('activeForm')
})
$('.already').click(function (e) {
  e.preventDefault()
  this.parentElement.parentElement.classList.remove('activeForm')
  document.querySelector('#SignIn').classList.add('activeForm')
})

///Sidebars

$('.hiddenFilter').click(function(e){
  e.preventDefault();
  $('.sidebarfilter-all').css("transform", `translateX(0)`); 
})
$('#closeFilter').click(function(){
  $('.sidebarfilter-all').css("transform", `translateX(-400px)`); 
})

$("#close-btn").click(function(){
  $(".sidebar-all").css("transform", `translateX(0)`); 
});
$("#close-s").click(function(){
  $(".sidebar-all").css("transform", `translateX(-500px)`); 
});

$("#pass").click(function (e) {
  e.preventDefault()
  let active=$(".hidden-list")
  active.removeClass("hidden-list")
  this.parentElement.parentElement.classList.add("hidden-list")
  
});
$(".second-head").click(function (e) {
  e.preventDefault()
  let active=$(".hidden-list")
  active.removeClass("hidden-list")
  this.parentElement.classList.add("hidden-list")
});

//Back to Top Button

$(window).scroll(function(){
  if ($('html, body').scrollTop()>20) {
    $('.scroll-el').fadeIn(400);
    $('.scroll-el').css('bottom','70px')
    
  } else {
    $('.scroll-el').fadeOut(400);
    $('.scroll-el').css('bottom','-100%')
  }
});
$('.scroll-el').click(function(){
  $('html, body').animate({
    scrollTop:0
  },300)
});

///MegaMenu

jQuery(document).on('click', '.mega-dropdown', function(e) {
    e.stopPropagation()
  })

//All Sliders

$('.slider-products').slick({
  dots: true,
  infinite: true,
  arrows:false,
  speed: 900,
  slidesToShow: 3,
  slidesToScroll:3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-products2').slick({
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 4,
  slidesToScroll:4 ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows:true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider3').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-team').slick({
  dots: true,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1023,
      settings: {
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-client').slick({
  arrows:true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows:true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Range Input
    
var thumbsize = 12;

function draw(slider,splitvalue) {

    /* set function vars */
    var min = slider.querySelector('.min');
    var max = slider.querySelector('.max');
    var lower = slider.querySelector('.lower');
    var upper = slider.querySelector('.upper');
    var legend = slider.querySelector('.legend');
    var thumbsize = parseInt(slider.getAttribute('data-thumbsize'));
    var rangewidth = parseInt(slider.getAttribute('data-rangewidth'));
    var rangemin = parseInt(slider.getAttribute('data-rangemin'));
    var rangemax = parseInt(slider.getAttribute('data-rangemax'));

    /* set min and max attributes */
    min.setAttribute('max',splitvalue);
    max.setAttribute('min',splitvalue);

    /* set css */
    min.style.width = parseInt(thumbsize + ((splitvalue - rangemin)/(rangemax - rangemin))*(rangewidth - (2*thumbsize)))+'px';
    max.style.width = parseInt(thumbsize + ((rangemax - splitvalue)/(rangemax - rangemin))*(rangewidth - (2*thumbsize)))+'px';
    min.style.left = '0px';
    max.style.left = parseInt(min.style.width)+'px';
    min.style.top = lower.offsetHeight+'px';
    max.style.top = lower.offsetHeight+'px';
    legend.style.marginTop = min.offsetHeight+'px';
    slider.style.height = (lower.offsetHeight + min.offsetHeight + legend.offsetHeight)+'px';
    
    /* correct for 1 off at the end */
    if(max.value>(rangemax - 1)) max.setAttribute('data-value',rangemax);

    /* write value and labels */
    max.value = max.getAttribute('data-value'); 
    min.value = min.getAttribute('data-value');
    lower.innerHTML = min.getAttribute('data-value');
    upper.innerHTML = max.getAttribute('data-value');

}

function init(slider) {
    /* set function vars */
    var min = slider.querySelector('.min');
    var max = slider.querySelector('.max');
    var rangemin = parseInt(min.getAttribute('min'));
    var rangemax = parseInt(max.getAttribute('max'));
    var avgvalue = (rangemin + rangemax)/2;
    var legendnum = slider.getAttribute('data-legendnum');

    /* set data-values */
    min.setAttribute('data-value',rangemin);
    max.setAttribute('data-value',rangemax);
    
    /* set data vars */
    slider.setAttribute('data-rangemin',rangemin); 
    slider.setAttribute('data-rangemax',rangemax); 
    slider.setAttribute('data-thumbsize',thumbsize); 
    slider.setAttribute('data-rangewidth',slider.offsetWidth);

    /* write labels */
    var lower = document.createElement('span');
    var upper = document.createElement('span');
    lower.classList.add('lower','value');
    upper.classList.add('upper','value');
    lower.appendChild(document.createTextNode(rangemin));
    upper.appendChild(document.createTextNode(rangemax));
    slider.insertBefore(lower,min.previousElementSibling);
    slider.insertBefore(upper,min.previousElementSibling);
    
    
    /* write legend */
    var legend = document.createElement('div');
    legend.classList.add('legend');
    var legendvalues = [];
    for (var i = 0; i < legendnum; i++) {
        legendvalues[i] = document.createElement('div');
        var val = Math.round(rangemin+(i/(legendnum-1))*(rangemax - rangemin));
        legendvalues[i].appendChild(document.createTextNode(val));
        legend.appendChild(legendvalues[i]);

    } 
    slider.appendChild(legend);

    /* draw */
    draw(slider,avgvalue);

    /* events */
    min.addEventListener("input", function() {update(min);});
    max.addEventListener("input", function() {update(max);});
}

function update(el){
    /* set function vars */
    var slider = el.parentElement;
    var min = slider.querySelector('#min');
    var max = slider.querySelector('#max');
    var minvalue = Math.floor(min.value);
    var maxvalue = Math.floor(max.value);
    
    /* set inactive values before draw */
    min.setAttribute('data-value',minvalue);
    max.setAttribute('data-value',maxvalue);

    var avgvalue = (minvalue + maxvalue)/2;

    /* draw */
    draw(slider,avgvalue);
}

var sliders = document.querySelectorAll('.min-max-slider');
sliders.forEach( function(slider) {
    init(slider);
});

//Shop Section Long Product Names

let val=$('.feat-name').text()
let newVal= val.length>30?val=val.slice(0,30)+'...':val;
$('.feat-name').text(newVal)

/////////////////////////////////////////////////////////

//USERS storage

if(JSON.parse(localStorage.getItem('Users'))===null) {
  localStorage.setItem('Users',JSON.stringify([]))
} 
else {
  let btnReg=document.querySelector('.button-register')
  btnReg.onclick=function(e){
    e.preventDefault();
    let users=JSON.parse(localStorage.getItem('Users'))
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    let exist_user=users.find(user=>user.Email===email)
    if (exist_user===undefined) {
      if (email.trim().length!==0&&password.trim().length!==0) {
        users.push({
          Email:email,
          Password:password
        })
        localStorage.setItem('Users',JSON.stringify(users))
        alert('You Have Registered Successfully!')
      }
      else{
        alert('Please Fill Boxes!')
      }
    } 
    else {
        alert('This Email Address Already Exists!')
    }
  }
}

let btnLog=document.querySelector('.button-login').addEventListener('click',function(e){
  e.preventDefault();
  let users=JSON.parse(localStorage.getItem('Users'))
  let email=document.querySelector('#logemail').value.toLowerCase()
  let password=document.querySelector('#logpassword').value.toLowerCase()
  let myUser;
  users.forEach(user=>{
   if (user.Email.toLowerCase()==email&&user.Password.toLowerCase()==password) {
    return myUser=user
   } 
  })
  if (email.trim().length===0||password.trim().length===0) {
    alert('Please Fill Boxes!')
  }
  else{
    if (myUser===undefined) {
      alert('Invalid Email Address Or Password!')
      document.querySelector('#loginRegister').innerHTML='LOGIN / REGISTER'
     }
      else {
      document.querySelector('#loginRegister').innerHTML='LOGOUT'
     }
  }
  
})

///Wine Products Storage

 if (localStorage.getItem('Wine')===null) {
  localStorage.setItem('Wine',JSON.stringify([]))
}
 let addBtn=document.querySelectorAll('.addCart')
 addBtn.forEach(btn=>{
  btn.onclick=function(e){
    e.preventDefault();
    let id=this.parentElement.parentElement.parentElement.getAttribute('data-name')
    let image=this.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.src
    let title=this.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerHTML
    let price=this.parentElement.parentElement.nextElementSibling.lastElementChild.lastElementChild.innerHTML
    let basket=JSON.parse(localStorage.getItem('Wine'))
    let exist=basket.find(item=>item.ID==id)
    if (exist===undefined) {
      basket.push({
        ID:id,
        Image:image,
        Title:title,
        Price:price,
        Count:1
      })
      this.firstElementChild.className="fa-solid fa-check"
      document.querySelector('.succesfully').innerHTML='<i class="fa-regular fa-circle-check"></i><span>Product was added to cart successfully!</span>'
      document.querySelector('.succesfully').style.right='3%'
    } 
    else {
      exist.Count++;
      document.querySelector('.succesfully').innerHTML='<span>This product already exists</span>'
      document.querySelector('.succesfully').style.right='3%'
    }
    localStorage.setItem('Wine', JSON.stringify(basket))
    setTimeout(() => {
      document.querySelector('.succesfully').style.right='-100%'
    }, 1500);
    ProductsNumber()
  }
 })
 function ProductsNumber(){
  let basket=JSON.parse(localStorage.getItem('Wine'))
  let span=document.querySelectorAll('.span-bag')
  span.forEach(item=>item.innerHTML=basket.length)
}
ProductsNumber()

//Details Section Zoom Effect

$(".img_producto_container")
  // tile mouse actions
  .on("mouseover", function() {
    $(this)
      .children(".img_producto")
      .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
  })
  .on("mouseout", function() {
    $(this)
      .children(".img_producto")
      .css({ transform: "scale(1)" });
  })
  .on("mousemove", function(e) {
    $(this)
      .children(".img_producto")
      .css({
        "transform-origin":
          ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          "% " +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          "%"
      });
  });

///Changing images order Details Section

  let images=$(".images")
  
 for (let img of images) {
  img.onclick=function(e){
    e.preventDefault()
    let act=$(".activeImg")
    act.removeClass("activeImg")
    this.parentElement.classList.add("activeImg")
    if (this.classList.contains('b-video')) {
      $('#mainVideo').removeClass('d-none')
      $('.img_producto').addClass('d-none')
    } else {
      $('#mainVideo').addClass('d-none')
      $('.img_producto').removeClass('d-none')
      $('.img_producto').css('background-image',`url(${this.firstElementChild.src})`)
    }
     
  }
 }

//Details TabMenu

 const tabLink = document.querySelectorAll(".tab-menu-link");
 const tabContent = document.querySelectorAll(".tab-bar-content");
 
 tabLink.forEach((item) => {
   item.addEventListener("click", activeTab);
 });
 
 function activeTab(item) {
   const btnTarget = item.currentTarget;
   const content = btnTarget.dataset.content;
 
   tabContent.forEach((item) => {
     item.classList.remove("is-active");
   });
 
   tabLink.forEach((item) => {
     item.classList.remove("is-active");
   });
 
   document.querySelector("#" + content).classList.add("is-active");
   btnTarget.classList.add("is-active");
 }
 
//Details increase decrease
document.querySelector('#incPr').onclick=function(e){
e.preventDefault();
document.querySelector('#inpPr').value++;
}
document.querySelector('#decPr').onclick=function(e){
  e.preventDefault();
  if (document.querySelector('#inpPr').value!=='1') {
    document.querySelector('#inpPr').value--;
  }
  }