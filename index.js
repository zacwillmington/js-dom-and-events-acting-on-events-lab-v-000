function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })

}

function retrieveEmployeeInformation(){
    return $('input:text').innerHTML();
    // return document.querySelector('input').value;
}

preventRefreshOnSubmit()
