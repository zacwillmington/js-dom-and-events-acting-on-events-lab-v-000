function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })

}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
    return document.querySelector('input').value;
}

function addNewElementAsLi() {
    const li = document.createElement('li')
     li.innerHTML = retrieveEmployeeInformation();
    return $('ul').first().append(li);
}

function addNewLiOnClick() {
    $('form').on('click', function(e) {
        console.log(e);
    });
}
