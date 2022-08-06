document.addEventListener("DOMContentLoaded", function(){

   const tabItem = document.querySelectorAll(".tab__elem");
   const tabContent = document.querySelectorAll(".content__elem");
   const tabImg = document.querySelectorAll(".content__img");

  const resultItem = document.querySelectorAll('.result__tab');
  const resultContent = document.querySelectorAll('.result__content');

   function tabChanger(item, content, img) {
      item.forEach((tab, index) => {
         tab.addEventListener('click', function(){
            content.forEach(content => {
               content.classList.remove('active');
            })
            item.forEach(tab => {
               tab.classList.remove('active');
            })
           if (img) {
            img.forEach(img => {
               img.classList.remove('active');
            })
           }
           
            
            content[index].classList.add('active');
            item[index].classList.add('active'); 
            if (img) {
               img[index].classList.add('active');
            }
            
         })
      })
   }
   tabChanger(tabItem, tabContent, tabImg);
   tabChanger(resultItem, resultContent);

})