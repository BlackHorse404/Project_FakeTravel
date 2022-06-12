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


// comment, vote
const btnMoTa = document.getElementById("MoTa")
const btnTTBoSung = document.getElementById("ThongTinBoSung")
const btnDanhGia = document.getElementById("DanhGia")

const contentMota = document.querySelector(".MoTa-Content")
const contentTTBS = document.querySelector(".TTBS-Content")
const contentDanhGia = document.querySelector(".DanhGia-Content")

btnMoTa.addEventListener("click",()=>{
    if(btnDanhGia.classList.contains("activeComment"))
        btnDanhGia.classList.remove("activeComment")
    if(btnTTBoSung.classList.contains("activeComment"))
        btnTTBoSung.classList.remove("activeComment")
    if(!btnMoTa.classList.contains("btnTTBoSung"))
        btnMoTa.classList.add("activeComment")

    contentMota.style.display = "block";
    contentTTBS.style.display = "none"
    contentDanhGia.style.display = "none"
})
btnTTBoSung.addEventListener("click",()=>{
    if(btnDanhGia.classList.contains("activeComment"))
        btnDanhGia.classList.remove("activeComment")
    if(btnMoTa.classList.contains("activeComment"))
        btnMoTa.classList.remove("activeComment")
    if(!btnTTBoSung.classList.contains("btnTTBoSung"))
    btnTTBoSung.classList.add("activeComment")

    contentMota.style.display = "none";
    contentTTBS.style.display = "block"
    contentDanhGia.style.display = "none"
})
btnDanhGia.addEventListener("click",()=>{
    if(btnMoTa.classList.contains("activeComment"))
    btnMoTa.classList.remove("activeComment")
    if(btnTTBoSung.classList.contains("activeComment"))
        btnTTBoSung.classList.remove("activeComment")
    if(!btnDanhGia.classList.contains("btnTTBoSung"))
        btnDanhGia.classList.add("activeComment")

        contentMota.style.display = "none";
        contentTTBS.style.display = "none"
        contentDanhGia.style.display = "block"
})

// star vote
const starVote = document.querySelectorAll("#StarVote li")

starVote.forEach((value,key) => {value.addEventListener("click",()=>{
    for(var j = key; j<starVote.length; j++)
        starVote[j].style.color="red"
    })
})


//back home
btnBackHome = document.getElementById("btn-backhome")
var myScrollFunc = function () {
    var y = window.scrollY;
    //when croll
    if (y >= 100) { 
        // show btn go to back home
        btnBackHome.classList.remove("hide")
        btnBackHome.classList.add("show")
    } 
    //when at top page
    else {
        //hide btn go to back home
        btnBackHome.classList.add("hide")
        btnBackHome.classList.remove("show")
    }
};
window.addEventListener("scroll", myScrollFunc);

//book in ticket
const btnBookIn = document.getElementById("bookin")
const formPay = document.getElementById("FormPayTicket")
const closeFormPay = document.getElementById("closeFormPay")

const btnBookInSucess = document.getElementById("bookinSuccess")
const alertSuccess = document.getElementById("alertSuccess")

const inputTourPay= document.querySelector('input[name="Tour"]');
const inputNamePay= document.querySelector('input[name="nameBooker"]');
const inputTitlePay= document.querySelector('input[name="Title"]');
const inputNumberTicketPay= document.querySelector('input[name="numberTicket"]');

const formPayMain = document.querySelector("#FormPayTicket form")

btnBookInSucess.addEventListener("click",()=>{
    if(inputTourPay.value.length != 0 &&
         inputNamePay.value.length != 0 && 
         inputTitlePay.value.length != 0 && 
         inputNumberTicketPay.value.length != 0)
    {
        alertSuccess.style.display = "block";
        setTimeout(() => {
            alertSuccess.style.display = "none";
            window.open("../index.html")
        },2000)
    }
})

closeFormPay.addEventListener("click", ()=>{
    if(formPay.classList.contains("show"))
    {
        formPay.classList.remove("show")
        formPay.classList.add("hide")
    }
})

btnBookIn.addEventListener("click", () => {
    if(formPay.classList.contains("hide"))
    {
        formPay.classList.remove("hide")
        formPay.classList.add("show")
    }
    else
    {
        formPay.classList.remove("show")
        formPay.classList.add("hide")
    }
})

