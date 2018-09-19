function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })

}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
    console.log($(':input'));
    return $(':input');
    // return document.querySelector('input').value;
}
