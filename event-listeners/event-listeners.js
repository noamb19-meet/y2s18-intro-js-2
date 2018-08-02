// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg','./imgs/desert.jpg','./imgs/music.jpg','./imgs/beach.jpg','./imgs/festival.jpg'];
var currentIndex = 0;

document.getElementById("pic").addEventListener("click",function showNextPicture() {
  currentIndex++; 
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  document.getElementById("pic").src = pictures[currentIndex]
  
});