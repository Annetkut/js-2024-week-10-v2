let sayText = () => console.log('Я учу Java Script!')
sayText();

function changeImg (){
    let image = document.getElementById('cat1');
    if (image.src.includes('images/cat_1.jpg')){
        image.src='images/cat_2.jpg'
    } else{
        image.src='images/cat_1.jpg'
    }
}

function calculateTotalPrice(quantity = 1, price = 15000000) {
    return quantity * price; // Возвращает стоимость
}

// Функция для показа стоимости
function showPrice() {
    let quantity = prompt("Введите количество товаров:", 1); // Получаем количество от пользователя
    let myPrice = calculateTotalPrice(quantity); // Вычисляем стоимость
    alert(`Стоимость покупки: ${myPrice} рублей`); // Показываем стоимость
}