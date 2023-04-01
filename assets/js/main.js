
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


if(params['category']==null)
{
    document.getElementById('cat_all').classList.add('cat_selected');
}
else{
    var item=document.getElementById(params['category']);
    item.classList.add('cat_selected'); 
}