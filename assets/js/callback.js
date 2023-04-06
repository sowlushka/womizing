/*Скрипты, обслуживающие работу формы уведомления об обратном звноке*/
var request = new XMLHttpRequest();

document.getElementById("callback").onclick = function () {
    /*Показываем форму на экране*/
    document.getElementById("background-modal").classList.add("background-display");
    document.getElementById("form-callback").classList.add("background-display");

};

document.getElementById("btn-close").onclick = function () {
    /*Удаляем форму с экрана*/
    document.getElementById("background-modal").classList.remove("background-display");
    document.getElementById("form-callback").classList.remove("background-display");


}

document.getElementById("callback-phone").oninput = function () {
    /*Простейшая проверка номера телефона на корректность*/
    var inpt_phone = this.value;
    /*var re = /^([+]?[0-9\s-\(\)]{3,25})*$/i;*/

    input_phone = inpt_phone.replace(/[^0-9]/g, '');
    this.value = input_phone;
}


document.getElementById("form-callback").onsubmit = function () {
    /*Нажата кнопка позвонить*/
    window.request.abort();
    var phone = document.getElementById("callback-phone").value;
    var url = "https://smspilot.ru/api.php";
    var apikey = '2R7K0325L4ZP1AH6ODE55W21U369X01WCF4ZU0DQZF4N67B3462TH801II29036U';
    url += '?send=' + '%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D0%BB%20%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9%20%D0%B7%D0%B2%D0%BE%D0%BD%D0%BE%D0%BA.%20%D0%A2%D0%B5%D0%BB.%20';
    url += phone;
    url += '&to=375257205113,' + phone;
    url += '&apikey=' + apikey.split('').reverse().join('');
    url += '&format=json';
    request.open('GET', url, true);
    request.send();
    document.getElementById("background-modal").classList.remove("background-display");
    document.getElementById("form-callback").classList.remove("background-display");
    return true;

}