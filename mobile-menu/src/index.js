import './styles/styles.css';
import menuIcon from "./assets/menu.svg";
import homeIcon from "./assets/home.svg";
import exploreIcon from "./assets/explore.svg";
import notificationsIcon from "./assets/notifications.svg";
import messagesIcon from "./assets/messages.svg";
import bookmarksIcon from "./assets/bookmarks.svg";
import listsIcon from "./assets/lists.svg";
import moreIcon from "./assets/more.svg";

let Sidebar = function (){
    this.closeButton = document.querySelector('.sidebar-close-button');
    this.sidebarOpen = document.querySelector('.sidebar-open');
    this.sidebarClosed = document.querySelector('.sidebar-closed');
    this.openButton=document.querySelector('.sidebar-open-button');
    this.isOpen=true;
};

Sidebar.prototype.addButtonListeners = function(){
    this.openButton.addEventListener('click', ()=>{
        //toggle sidebar
        this.toggleSidebar();
    });
    this.closeButton.addEventListener('click', ()=>{
        //toggle sidebar
        this.toggleSidebar();
    });
};

Sidebar.prototype.addImages = function (){
    //set open button icon
    this.openButton.setAttribute('src', menuIcon);
    //set close button icon
    this.closeButton.setAttribute('src', menuIcon);
    //set home icon
    document.querySelector('.home-icon').setAttribute('src', homeIcon);
    //set explore icon
    document.querySelector('.explore-icon').setAttribute('src', exploreIcon);
    //set noticications icon
    document.querySelector('.notifications-icon').setAttribute('src', notificationsIcon);
    //set messages icon
    document.querySelector('.messages-icon').setAttribute('src', messagesIcon);
    //set bookmarks icon
    document.querySelector('.bookmarks-icon').setAttribute('src', bookmarksIcon);
    //set lists icon
    document.querySelector('.lists-icon').setAttribute('src', listsIcon);
    //set more icon
    document.querySelector('.more-icon').setAttribute('src', moreIcon);
};

Sidebar.prototype.toggleSidebar = function (){
    //change the isOpen property
    this.isOpen===false ? this.isOpen=true : this.isOpen =false;
    //open or close the sidebar depending on isOpen property
    if (this.isOpen==true){
        this.sidebarOpen.style.display="block";
        this.sidebarClosed.style.display="none";
    }else{
        this.sidebarOpen.style.display="none";
        this.sidebarClosed.style.display="block";
    }
};

let SIDEBARCONTROLLER = new Sidebar();
//load button images
SIDEBARCONTROLLER.addImages();
//add button click listeners
SIDEBARCONTROLLER.addButtonListeners();