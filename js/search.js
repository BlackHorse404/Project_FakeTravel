
var searchInput = document.querySelector('.filter-input>input');
var resultSearch = document.querySelector('.result-search');
var overPlay = document.querySelector('.overplay-search');


overPlay.onclick = function() {
    resultSearch.style.display = 'none';
    overPlay.style.display = 'none';
}


searchInput.oninput = function() {
    var list = document.getElementsByClassName('filter-posts__item');
    resultSearch.style.display = 'block';
    overPlay.style.display = 'block';
    var str = '';
    for(var i= 0; i < list.length; i++) {
        var title = list[i].querySelector('.filter-posts__item-heading');
        if(title.textContent.includes(searchInput.value)){
            var item = list[i].querySelector('.filter-posts__item--link');
            var link = item.href;
            str = str + '<a href="' + link + '">' + title.textContent + '</a>'
        }
    }
    resultSearch.innerHTML = str;
}