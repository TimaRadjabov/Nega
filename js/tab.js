document.addEventListener("DOMContentLoaded", function(){

   const tabItem = document.querySelectorAll(".tab__elem");
   const tabContent = document.querySelectorAll(".content__elem");
   const tabImg = document.querySelectorAll(".content__img");

  

   function tabChanger(item, content, img) {
      item.forEach((tab, index) => {
         tab.addEventListener('click', function(){
            content.forEach(content => {
               content.classList.remove('active');
            })
            item.forEach(tab => {
               tab.classList.remove('active');
            })
            img.forEach(img => {
               img.classList.remove('active');
            })
           
            
            content[index].classList.add('active');
            item[index].classList.add('active'); 
            img[index].classList.add('active');
            
         })
      })
   }
   tabChanger(tabItem, tabContent, tabImg);

})