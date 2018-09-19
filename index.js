function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })

}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){

    return $(':input').on('click', function(e){
        console.log(e);
    });
    // return document.querySelector('input').value;
}
