// initializing count to 0
let count = 0;


// function for increment button
const incrementCount =()=>{
  count=count+1;
  let idValue = document.getElementById('countValue');
  idValue.innerHTML = count;

}


//function for decrement button
const decrementCount =()=>{
    count=count-1;
    let idValue = document.getElementById('countValue');
    idValue.innerHTML = count;


    // when we decrement the value, the value should not go beyond 0
    if (count < 0) {
        idValue.innerHTML = 0;
    }
    
  
  }