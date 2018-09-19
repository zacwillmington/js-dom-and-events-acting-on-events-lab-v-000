function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })

}

function retrieveEmployeeInformation(){
    console.log($(':input'));
    return $(':input');
    // return document.querySelector('input').value;
}

preventRefreshOnSubmit()
