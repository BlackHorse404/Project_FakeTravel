// custom curousel
// comment
const NXKhachHangElement = document.querySelector('#carouselNhanXetKhachHang')
const carousel  = new bootstrap.Carousel(NXKhachHangElement, {
    interval: 3000,
    pause: 'hover'
})
// slide master
const SlideImgElement = document.querySelector('#carouselSlideImg')
const carousel1 = new bootstrap.Carousel(SlideImgElement, {
    interval: 5000,
    pause:'none'
})

// scroll bar
// change background menu
myMenu = document.getElementById("box--header__menu");
myLogo = document.getElementById("logoWeb"); 
btnBackHome = document.getElementById("btn-backhome")
var myScrollFunc = function () {
    var y = window.scrollY;
    //when croll
    if (y >= 100) { 
        //change back ground menu is black & change size menu minimize
        myMenu.classList.add("bg-black")
        Object.assign(myMenu.style,{
            height : "40px",
            transition: "all 0.5s"
        })
        // change size logo when croll
        Object.assign(myLogo.style, {
            width: "80px",
            transition: "all 0.5s"
        })
        // show btn go to back home
        btnBackHome.classList.remove("hide")
        btnBackHome.classList.add("show")
    } 
    //when at top page
    else {
        //hide btn go to back home
        btnBackHome.classList.add("hide")
        btnBackHome.classList.remove("show")
        //background default is transparent & size menu default
        myMenu.classList.remove("bg-black")
        Object.assign(myMenu.style,{
            height : "63.08px"
        })
        Object.assign(myLogo.style, {
            width: "120px"
        })
    }
};
window.addEventListener("scroll", myScrollFunc);

// croll to show element
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;//height of viewport
        var elementTop = reveals[i].getBoundingClientRect().top;//get location from element
        var elementVisible = 150;//location wil show

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

// hover item voucher
const textImg = document.querySelectorAll(".text-img-voucher");
const imgV = document.querySelectorAll(".imgV");
const Imgs = document.querySelectorAll(".imgV>img:first-child");

imgV.forEach(function(img,index){
    img.addEventListener("mouseover",()=>{
        textImg[index].style.display = "block",
        Imgs[index].style.filter = "brightness(50%)",
        Imgs[index].style.transition = "all 0.5s",
        textImg[index].style.transition = "all 0.5s"
    })
})

imgV.forEach(function(img,index){
    img.addEventListener("mouseout",()=>{
        textImg[index].style.display = "none",
        Imgs[index].style.filter = "brightness(100%)"
        Imgs[index].style.transition = "all 0.5s",
        textImg[index].style.transition = "all 0.5s"
    })
})

// show sub menu

const TourNoiDia = document.getElementById("TourNoiDia");
const subMenu_NoiDia = document.getElementById("SubMenu_NoiDia")
const TourNuocNgoai = document.getElementById("TourNuocNgoai");
const subMenu_NuocNgoai = document.getElementById("SubMenu_NuocNgoai")

TourNoiDia.addEventListener("mouseover",() => {
        subMenu_NoiDia.classList.remove("hide")
        subMenu_NoiDia.classList.add("show")
})
TourNoiDia.addEventListener("mouseout",() => {
    subMenu_NoiDia.classList.remove("show")
    subMenu_NoiDia.classList.add("hide")
})

TourNuocNgoai.addEventListener("mouseover",() => {
    subMenu_NuocNgoai.classList.remove("hide")
    subMenu_NuocNgoai.classList.add("show")
})
TourNuocNgoai.addEventListener("mouseout",() => {
    subMenu_NuocNgoai.classList.remove("show")
    subMenu_NuocNgoai.classList.add("hide")
})

// hover for element sub menu
const listNoiDia = document.querySelectorAll("#SubMenu_NoiDia tbody td")
listNoiDia.forEach((value, key) => {
    if(value.innerHTML.length != 0)
    {
        value.addEventListener("mouseover",() => {
            value.classList.add("SelectItem");
        })
        value.addEventListener("mouseout",() => {
            value.classList.remove("SelectItem");
        })
    }
})
const listNuocNgoai = document.querySelectorAll("#SubMenu_NuocNgoai tbody td")
listNuocNgoai.forEach((value, key) => {
    if(value.innerHTML.length != 0)
    {
        value.addEventListener("mouseover",() => {
            value.classList.add("SelectItem");
        })
        value.addEventListener("mouseout",() => {
            value.classList.remove("SelectItem");
        })
    }
})

// hover item search on menu
const itemSearchMenu = document.getElementById("item--search");
const boxSearchItemMenu = document.getElementById("box--search");
itemSearchMenu.addEventListener("mouseover",() => {
    boxSearchItemMenu.classList.add("show");
    boxSearchItemMenu.classList.remove("hide");
})
itemSearchMenu.addEventListener("mouseout",() => {
    boxSearchItemMenu.classList.add("hide");
    boxSearchItemMenu.classList.remove("show");
})

const itemShopCart = document.getElementById("item--shopCart");
const boxitemShopCart = document.getElementById("box--shopCart");
itemShopCart.addEventListener("mouseover",() => {
    boxitemShopCart.classList.add("show");
    boxitemShopCart.classList.remove("hide");
})
itemShopCart.addEventListener("mouseout",() => {
    boxitemShopCart.classList.add("hide");
    boxitemShopCart.classList.remove("show");
})

// menu mobile
const mySubMenu = document.getElementById("mySidenav");
function openNav() {
    mySubMenu.style.width = "100%";
}

function closeNav() {
    mySubMenu.style.width = "0";
}

// button
const btnMobileTourNoiDia = document.getElementById("btn-mobile-TourNoiDia")
const btnMobileTourNuocNgoai = document.getElementById("btn-mobile-TourNuocNgoai")

const btnmobileTourNoiDiaBac = document.getElementById("btn-mobile-TourNoiDia-Bac")
const btnmobileTourNoiDiaTrung = document.getElementById("btn-mobile-TourNoiDia-Trung")
const btnmobileTourNoiDiaNam = document.getElementById("btn-mobile-TourNoiDia-Nam")

const btnmobileTourNuocNgoaiA = document.getElementById("btn-mobile-TourNuocNgoai-A")
const btnmobileTourNuocNgoaiAu = document.getElementById("btn-mobile-TourNuocNgoai-Au")
const btnmobileTourNuocNgoaiMy = document.getElementById("btn-mobile-TourNuocNgoai-My")
const btnmobileTourNuocNgoaiUc = document.getElementById("btn-mobile-TourNuocNgoai-Uc")

// sub mobile noi dia
const mobileTourNoiDia = document.getElementById("mobile-TourNoiDia");
const mobileTourNoiDiaBac = document.getElementById("mobile-TourNoiDia-Bac")
const mobileTourNoiDiaTrung = document.getElementById("mobile-TourNoiDia-Trung")
const mobileTourNoiDiaNam = document.getElementById("mobile-TourNoiDia-Nam")
// sub moblie nuoc ngoai
const mobileTourNuocNgoai = document.getElementById("mobile-TourNuocNgoai");
const mobileTourNuocNgoaiA = document.getElementById("mobile-TourNuocNgoai-A")
const mobileTourNuocNgoaiAu = document.getElementById("mobile-TourNuocNgoai-Au")
const mobileTourNuocNgoaiMy = document.getElementById("mobile-TourNuocNgoai-My")
const mobileTourNuocNgoaiUc = document.getElementById("mobile-TourNuocNgoai-Uc")



//trong nuoc
btnMobileTourNoiDia.addEventListener("click",()=>{
    if(mobileTourNoiDia.classList.contains("hide"))
    {
        btnMobileTourNoiDia.children[0].classList.remove("fa-angle-down")
        btnMobileTourNoiDia.children[0].classList.add("fa-angle-up")
        mobileTourNoiDia.classList.remove("hide")
        mobileTourNoiDia.classList.add("show")
    }
    else{
        mobileTourNoiDia.classList.remove("show")
        mobileTourNoiDia.classList.add("hide")
        btnMobileTourNoiDia.children[0].classList.add("fa-angle-down")
        btnMobileTourNoiDia.children[0].classList.remove("fa-angle-up")
    }    
})

btnmobileTourNoiDiaBac.addEventListener("click",() =>{
    if(mobileTourNoiDiaBac.classList.contains("hide"))
    {
        mobileTourNoiDiaBac.classList.remove("hide")
        mobileTourNoiDiaBac.classList.add("show")
        btnmobileTourNoiDiaBac.children[0].classList.remove("fa-angle-down")
        btnmobileTourNoiDiaBac.children[0].classList.add("fa-angle-up")
    }
    else{
        mobileTourNoiDiaBac.classList.remove("show")
        mobileTourNoiDiaBac.classList.add("hide")
        btnmobileTourNoiDiaBac.children[0].classList.add("fa-angle-down")
        btnmobileTourNoiDiaBac.children[0].classList.remove("fa-angle-up")
    }  
})
btnmobileTourNoiDiaTrung.addEventListener("click",() =>{
    if(mobileTourNoiDiaTrung.classList.contains("hide"))
    {
        mobileTourNoiDiaTrung.classList.remove("hide")
        mobileTourNoiDiaTrung.classList.add("show")
        btnmobileTourNoiDiaTrung.children[0].classList.remove("fa-angle-down")
        btnmobileTourNoiDiaTrung.children[0].classList.add("fa-angle-up")
    }
    else{
        mobileTourNoiDiaTrung.classList.remove("show")
        mobileTourNoiDiaTrung.classList.add("hide")
        btnmobileTourNoiDiaTrung.children[0].classList.add("fa-angle-down")
        btnmobileTourNoiDiaTrung.children[0].classList.remove("fa-angle-up")
    }  
})
btnmobileTourNoiDiaNam.addEventListener("click",() => {
    if(mobileTourNoiDiaNam.classList.contains("hide"))
    {
        mobileTourNoiDiaNam.classList.remove("hide")
        mobileTourNoiDiaNam.classList.add("show")
        btnmobileTourNoiDiaNam.children[0].classList.remove("fa-angle-down")
        btnmobileTourNoiDiaNam.children[0].classList.add("fa-angle-up")
    }
    else{
        mobileTourNoiDiaNam.classList.remove("show")
        mobileTourNoiDiaNam.classList.add("hide")
        btnmobileTourNoiDiaNam.children[0].classList.add("fa-angle-down")
        btnmobileTourNoiDiaNam.children[0].classList.remove("fa-angle-up")
    }  
})


//nuoc ngoai
btnMobileTourNuocNgoai.addEventListener("click",()=>{
    if(mobileTourNuocNgoai.classList.contains("hide"))
    {
        mobileTourNuocNgoai.classList.remove("hide")
        mobileTourNuocNgoai.classList.add("show")
        btnMobileTourNuocNgoai.children[0].classList.remove("fa-angle-down")
        btnMobileTourNuocNgoai.children[0].classList.add("fa-angle-up")

    }
    else{
        mobileTourNuocNgoai.classList.remove("show")
        mobileTourNuocNgoai.classList.add("hide")
        btnMobileTourNuocNgoai.children[0].classList.add("fa-angle-down")
        btnMobileTourNuocNgoai.children[0].classList.remove("fa-angle-up")

    }    
})
    //1
btnmobileTourNuocNgoaiA.addEventListener("click",() =>{
    if(mobileTourNuocNgoaiA.classList.contains("hide"))
    {
        mobileTourNuocNgoaiA.classList.remove("hide")
        mobileTourNuocNgoaiA.classList.add("show")
        btnmobileTourNuocNgoaiA.children[0].classList.remove("fa-angle-down")
        btnmobileTourNuocNgoaiA.children[0].classList.add("fa-angle-up")

    }
    else{
        mobileTourNuocNgoaiA.classList.remove("show")
        mobileTourNuocNgoaiA.classList.add("hide")
        btnmobileTourNuocNgoaiA.children[0].classList.add("fa-angle-down")
        btnmobileTourNuocNgoaiA.children[0].classList.remove("fa-angle-up")

    }  
})
    //2
btnmobileTourNuocNgoaiAu.addEventListener("click",() =>{
    if(mobileTourNuocNgoaiAu.classList.contains("hide"))
    {
        mobileTourNuocNgoaiAu.classList.remove("hide")
        mobileTourNuocNgoaiAu.classList.add("show")
        btnmobileTourNuocNgoaiAu.children[0].classList.remove("fa-angle-down")
        btnmobileTourNuocNgoaiAu.children[0].classList.add("fa-angle-up")

    }
    else{
        mobileTourNuocNgoaiAu.classList.remove("show")
        mobileTourNuocNgoaiAu.classList.add("hide")
        btnmobileTourNuocNgoaiAu.children[0].classList.add("fa-angle-down")
        btnmobileTourNuocNgoaiAu.children[0].classList.remove("fa-angle-up")

    }  
})
    //3
btnmobileTourNuocNgoaiMy.addEventListener("click",() =>{
    if(mobileTourNuocNgoaiMy.classList.contains("hide"))
    {
        mobileTourNuocNgoaiMy.classList.remove("hide")
        mobileTourNuocNgoaiMy.classList.add("show")
        btnmobileTourNuocNgoaiMy.children[0].classList.remove("fa-angle-down")
        btnmobileTourNuocNgoaiMy.children[0].classList.add("fa-angle-up")

    }
    else{
        mobileTourNuocNgoaiMy.classList.remove("show")
        mobileTourNuocNgoaiMy.classList.add("hide")
        btnmobileTourNuocNgoaiMy.children[0].classList.add("fa-angle-down")
        btnmobileTourNuocNgoaiMy.children[0].classList.remove("fa-angle-up")

    }  
})
    //4
btnmobileTourNuocNgoaiUc.addEventListener("click",() =>{
    if(mobileTourNuocNgoaiUc.classList.contains("hide"))
    {
        mobileTourNuocNgoaiUc.classList.remove("hide")
        mobileTourNuocNgoaiUc.classList.add("show")
        btnmobileTourNuocNgoaiUc.children[0].classList.remove("fa-angle-down")
        btnmobileTourNuocNgoaiUc.children[0].classList.add("fa-angle-up")

    }
    else{
        mobileTourNuocNgoaiUc.classList.remove("show")
        mobileTourNuocNgoaiUc.classList.add("hide")
        btnmobileTourNuocNgoaiUc.children[0].classList.add("fa-angle-down")
        btnmobileTourNuocNgoaiUc.children[0].classList.remove("fa-angle-up")

    }  
})