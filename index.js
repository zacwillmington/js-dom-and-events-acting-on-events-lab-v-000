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
    document.addNewElement()
    return $('ul').append();
}
