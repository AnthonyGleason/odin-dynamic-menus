import "./styles/styles.css";

let toggleDropMenu = function (item){
    let dropMenu=item.querySelector(".drop-down-menu");
    dropMenu.style.display==='block' ? dropMenu.style.display='none' : dropMenu.style.display='block';
};

//Get all header item divs
let headerItemDivs=document.querySelectorAll(".header-item");

//Add mouseover event
headerItemDivs.forEach((item)=>{
    item.addEventListener('mouseenter', ()=>{
        toggleDropMenu(item);
    });
});

//Add mouseleave event
headerItemDivs.forEach((item)=>{
    item.addEventListener('mouseleave', ()=>{
        toggleDropMenu(item);
    });
});