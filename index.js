var button =document.getElementById('btn')
button.addEventListener('click',() =>{
    var weight= document.getElementById('weight').value
    var height= document.getElementById('height').value
    var bmiResult=document.getElementById('results')
    var Result=document.getElementById('message')
    var heightError=document.getElementById('heightError')
    var weightError=document.getElementById('weightError')
    console.log(weight)
    var bMI= (weight/(height*height))
    var bmi= Math.round(bMI) 
    if (height=='') {
        heightError.style.display='block'
        bmiResult.innerHTML=''
        Result.innerHTML=''
    } if (weight=='') {
        weightError.style.display='block'
        bmiResult.innerHTML=''
        Result.innerHTML=''
    } 
    else {
        weightError.style.display='none'
        heightError.style.display='none'
        console.log(bMI)
    bmiResult.textContent=bmi
    var message=""
    if (bmi <19) {
        message="Under weight: may be at risk for health problems"  
      }
      else if (bmi<25){
        message= "Normal weight: healthy weight"  
      }
      else if (bmi<30){
        message= "Over weight: may be at risk for health problems"  
      }
      else {
         message="Obese: higher risk for serious health problem" 
      }
      console.log(message)
      Result.innerHTML=message 

    }
  
})








// Underweight: BMI < 18.5 (may be at risk for health problems)
//Normal Weight: BMI = 18.5-24.9 (healthy weight)
//Overweight: BMI = 25-29.9 (may be at risk for health problems)
//Obese: BMI ≥ 30 (higher risk for serious health probl