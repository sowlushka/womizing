
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


if (params['category'] == null) {
    document.getElementById('cat_all').classList.add('cat_selected');
}
else {
    var item = document.getElementById(params['category']);
    item.classList.add('cat_selected');
}


/*Подсветка выбранной страницы товара*/
if (params['page'] == null) {
    document.getElementById('page_1').classList.add('cat_selected');
}
else {
    /*Сюда можно попасть, если выбрана 
    хоть одна категория товара. 
    Меняем все линки внутри container-page-counter*/
    var html = document.getElementsByClassName('container-page-counter')[0].innerHTML;
    html = html.replaceAll('=_&', '=' + params['category'] + '&');
    document.getElementsByClassName('container-page-counter')[0].innerHTML = html;

    document.getElementById('page_' + params['page']).classList.add('cat_selected');
}