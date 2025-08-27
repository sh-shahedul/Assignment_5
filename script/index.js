     function getElement(id){
      const element = document.getElementById(id)
      return element;
     }
   
  const cardContainer =   getElement('card-container').addEventListener('click',function(e){
          //  heart 
    if(e.target.className.includes('heart-btn')){
             const heart = getElement('total-heart').innerText
             const totalHeart = Number(heart)+1;
             getElement('total-heart').innerText = totalHeart;
          }
 
            //  coin 
    if(e.target.className.includes('call-button')){
            const callButton = e.target
            const serviceName = callButton.parentNode.parentNode.children[1].innerText
            const serviceNumber = callButton.parentNode.parentNode.children[3].innerText
            let coinNumber = Number(getElement('coin').innerText)
         if(coinNumber>=20){
            coinNumber = coinNumber-20;
            getElement('coin').innerText = coinNumber 
            alert( '📞'+'calling'+' '+ serviceName +' ' + serviceNumber +'...')
        }
        else if(coinNumber<=0){
            alert('❌ you dont have enough coin ! You need at least twenty coin to make a call')
        }
        else{
           return
        }
        // history 
           const historyContainer = getElement('history-container')
           const date = new Date().toLocaleTimeString()
           const history = document.createElement('div')
           history.innerHTML = `
                  <div class=" flex justify-between items-center bg-gray-100 p-4 my-2 rounded-lg ">
                  <div>
                  <h1 class="text-lg font-semibold">${serviceName}</h1>
                  <p class="text-lg text-gray-500">${serviceNumber}</p>
                  </div>
                  <p class="font-semibold">${date}</p>
                  </div>         
                 ` 
           historyContainer.appendChild(history)
           }
          //copy
    if(e.target.className.includes('copy-button')){
          const number = e.target
          const cellNumber = number.parentNode.parentNode.children[3].innerText
          console.log(cellNumber)
          if (navigator.clipboard) {
          navigator.clipboard.writeText(cellNumber);
          }
          alert('number is copied'+" "+ cellNumber)
          const copyCount =  Number(getElement('copy-count').innerText)
          const totalCopy = copyCount + 1
          getElement('copy-count').innerText = totalCopy
          }

    })

            // clear 
        const clearBtn= getElement('clear-btn').addEventListener('click',function(){
        getElement('history-container').innerText =''
        })


      