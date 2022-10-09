import './styles/styles.css';
import imgOne from './assets/img-one.jpg';
import imgTwo from './assets/img-two.jpg';
import imgThree from './assets/img-three.jpg';

let ImgSlider= function(){
    this.currentImg = null;
    this.imgArray=this.populateImgArray();
    this.dotArray=this.populateDotArray();
    this.imgContainer = document.querySelector('.img-container');
    this.backButton = document.querySelector('.img-back-arrow');
    this.forwardButton = document.querySelector('.img-forward-arrow');
};

ImgSlider.prototype.displayImg = function (img){
    this.imgContainer.innerHTML="";
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', img);
    this.imgContainer.appendChild(imgElement);
};
ImgSlider.prototype.displayDot = function (imgIndex){
    //clear all dot color
    this.dotArray.forEach((dotItem)=>{
        dotItem.style.backgroundColor="white";
    });
    //color the correct dot
    this.dotArray[imgIndex].style.backgroundColor="black";
};
ImgSlider.prototype.populateDotArray = function (){
    let imgDotArray = document.querySelectorAll('.img-dot');
    let i=0;
    //set event listeners
    imgDotArray.forEach((dotItem)=>{
        dotItem.index = i;
        dotItem.addEventListener('click',()=>{
            this.setImg(dotItem.index);
        });
        i++;
    });
    return imgDotArray;
};

ImgSlider.prototype.populateImgArray = function (){
    //populate the image array here with imported images
    return [imgOne,imgTwo,imgThree];
};

ImgSlider.prototype.setImg = function (nextImgIndex){
    let nextImg = this.imgArray[nextImgIndex];
    this.currentImg=nextImgIndex;
    this.displayDot(nextImgIndex);
    this.displayImg(nextImg);
};

ImgSlider.prototype.nextImg = function (){
    let nextImg;
    let nextImgIndex;
    //check to see if there is a current image
    if (this.currentImg==null){
        //set the inital image
        nextImg = this.imgArray[0];
        nextImgIndex = 0;
    } else{
        //set the next image 
        nextImg= this.imgArray[this.currentImg+1];
        nextImgIndex = this.currentImg+1;
    };
    //if we go past the last image set the index to the first image
    
    if (nextImgIndex>2){
        nextImg=this.imgArray[0];
        nextImgIndex=0;
    };
    //sets the next image index to the controller
    this.currentImg=nextImgIndex;
    //display the next dot;
    this.displayDot(nextImgIndex);
    //display the next image
    this.displayImg(nextImg);
};

ImgSlider.prototype.previousImg = function (){
    let previousImg = this.imgArray[this.currentImg-1]
    let previousImgIndex=this.currentImg-1;
    //if we go past the first image set the index to the last image
    if (previousImgIndex<0){
        //subtract one from the length to account for the array storage
        let imgArrayLength=this.imgArray.length-1;
        previousImg=this.imgArray[imgArrayLength];
        previousImgIndex=imgArrayLength;
    }
    //sets the previous image index to the controller
    this.currentImg=previousImgIndex;
    //display the previous dot;
    this.displayDot(previousImgIndex);
    //display the previous image
    this.displayImg(previousImg);
};

ImgSlider.prototype.addButtonListeners = function (){
    //back button
    this.backButton.addEventListener('click', ()=>{
        this.previousImg();
    });
    //forward button
    this.forwardButton.addEventListener('click', ()=>{
        this.nextImg();
    });
};

ImgSlider.prototype.nextImgLoop = function (){
    setTimeout(() => {
        this.nextImg();
        this.nextImgLoop();
        }, "5000")
};

//create the slide controller
let SLIDECONTROLLER= new ImgSlider();
//Add event listeners to the forward and back buttons
SLIDECONTROLLER.addButtonListeners();
//set inital image
SLIDECONTROLLER.nextImg();
//start next img loop
SLIDECONTROLLER.nextImgLoop();
