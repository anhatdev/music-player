var search=document.getElementById('searchTerm');
var searchList=document.getElementById('searchList');
search.addEventListener('input',function(e){
    searchList.style.display='block';
    if(e.target.value===''){
        searchList.style.display='none';
    }
})