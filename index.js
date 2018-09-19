function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })

}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){

    // $(':input').on('click', function(e){
    //     console.log(e);
    // });
    return document.querySelector('input').value;
}

function addNewElementAsLi(){
    const li = document.createElement('li')
    console.log(li)
    // li.value = retrieveEmployeeInformation();
    return $('ul').append(li);
}
