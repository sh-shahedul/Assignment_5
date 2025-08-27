     function getElement(id){
      const element = document.getElementById(id)
      return element;
     }
   
  const cardContainer =   getElement('card-container').addEventListener('click',function(e){
      if(e.target.className.includes('heart-btn')){
     const heart = getElement('total-heart').innerText
       const totalHeart = Number(heart)+1;
        getElement('total-heart').innerText = totalHeart;
      }
       if(e.target.className.includes('call-button')){
         const callButton = e.target
         const serviceName = callButton.parentNode.parentNode.children[1].innerText
         const serviceNumber = callButton.parentNode.parentNode.children[3].innerText
         alert( '📞'+'calling'+' '+ serviceName +' ' +' '+ serviceNumber +'....')
         
      

       }
      
    })

      