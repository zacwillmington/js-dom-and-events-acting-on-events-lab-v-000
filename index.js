function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })

}

function retrieveEmployeeInformation(){
    console.log($('input:text'));
    return $('input:text');
    // return document.querySelector('input').value;
}

preventRefreshOnSubmit()
