     function getElement(id){
      const element = document.getElementById(id)
      return element;
     }
   
    getElement('card-container').addEventListener('click',function(e){
      if(e.target.className.includes('heart-btn')){
     const heart = getElement('total-heart').innerText
       const totalHeart = Number(heart)+1;
        getElement('total-heart').innerText = totalHeart;
      }

   
     
    })

      