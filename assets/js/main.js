
/*Блок кода для выделения категории товара
по полученному get-запросу*/
/*Получаю get-параметры*/
var params = window
    .location
    .search
    .replace('?', '')
    .split('&')
    .reduce(
        function (p, e) {
            var a = e.split('=');
            p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        }, {}
    );

if(params['category']==null){
    params['category']='cat_all';
}

if(params['page']==null){
    params['page']='1';
}

/*Подсвечиваем категорию выбранного товара */
var item = document.getElementById(params['category']);
item.classList.add('cat_selected');


/*Выставляем во всех линках счётчика страниц container-page-counter
выбранную категорию товара*/
var html = document.getElementsByClassName('container-page-counter')[0].innerHTML;
html = html.replaceAll('=_&', '=' + params['category'] + '&');
document.getElementsByClassName('container-page-counter')[0].innerHTML = html;

/*Выделяем выбранную страницу*/
document.getElementById('page_' + params['page']).classList.add('cat_selected');
