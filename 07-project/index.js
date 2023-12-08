const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(event_object_name){
    console.log(event_object_name)
    console.log(event_object_name.target)
    if(event_object_name.target.id === 'grey'){
        body.style.backgroundColor = event_object_name.target.id;
    }
    if(event_object_name.target.id === 'white'){
        body.style.backgroundColor = event_object_name.target.id;
    }
    if(event_object_name.target.id === 'blue'){
        body.style.backgroundColor = event_object_name.target.id;
    }
    if(event_object_name.target.id === 'yellow'){
        body.style.backgroundColor = event_object_name.target.id;
    }
    if(event_object_name.target.id === 'purple'){
        body.style.backgroundColor = event_object_name.target.id;
    }
  });
});
