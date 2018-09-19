function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })

}

function retrieveEmployeeInformation(){
    return $(':text');
    // return document.querySelector('input').value;
}

preventRefreshOnSubmit()
