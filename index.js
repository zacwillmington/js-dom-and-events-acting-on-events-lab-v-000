function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })

}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
    return document.querySelector('input').value;
}

function addNewElementAsLi(){
    const li = document.createElement('li')
     li.innerHTML = retrieveEmployeeInformation();
     console.log(li)
    return $('ul').first().append(li);
}
