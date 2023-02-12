function searchItem(){
    var input = document.getElementById('searchInput').value;
    var items = document.getElementsByClassName('list');
    for( let i = 0; i < items.length; i++){
        if(input == "" || items[i].innerHTML.toLowerCase().includes(input.toLowerCase())){
            items[i].style.display = 'block';
        }
        else{
            items[i].style.display = 'none';
        }
    }
    return false;
}

function resetInput(){
    var input = document.getElementById('searchInput');
    input.value = ' ';
    searchItem();
    
}