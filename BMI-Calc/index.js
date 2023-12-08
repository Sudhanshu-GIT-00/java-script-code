const form = document.querySelector('form')
//  this use case will give u empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (event_object_name){
    event_object_name.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const weight_guide = document.querySelector('#weight-guide');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `plz give valid height ${height}`;

    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `plz give valid weight ${weight}`;

    }
    else{
        const BMI = (weight / ((height * height)/10000)).toFixed(2);
       //show the result
       result.innerHTML = `<span>${BMI}</span>`;
       
       if(BMI <= 18.6){
        weight_guide.innerHTML = `</br><span>Under Weight</span>`;
       }
       else if(BMI > 18.6 && BMI >= 24.9){
        weight_guide.innerHTML = `</br><span>Normal Weight</span>`;
       }
       if(BMI < 34.9){
        weight_guide.innerHTML = `</br><span>Over weight</span>`;
       }
    }
    
});

