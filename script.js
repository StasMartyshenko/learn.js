// Условные операторы: if, '?'
//
// var a = 'js';
// var d = prompt('Каково «официальное» название JavaScript?', '')
// if (d=='ECMAScript') {
//  console.log ('Верно!');
// } else {
// console.log('«Не знаете? «ECMAScript»!');
// }
//
//
// var number = prompt('значение', '');
// if (number>0) {
//  alert ('1');
// } else if (number<0) {
//   alert('-1');
// } else {
//   alert ('0');
// }
//
//
// var code = prompt('кто пришел?', '');
// if (code == 'Админ') {
//   var login = prompt('логин', '');
//   if (login == 'Чёрный Властелин') {
//     alert('Добро пожаловать');
//   } else if (login == null) {
//     alert('Вход отменён');
//   } else {
//     alert('Пароль не верный');
//   }
// } else if (login == null) {
//   alert('Вход отменён');
// } else {
//   alert ('я вас не знаю');
// }
//
//
// var a = (a + b < 4) ? 'Мало' : 'Много';
//
// var message = (login == 'Вася') ? 'Вася' : (login == 'Директор') ? 'Здравствуйте' : login == '' ? 'Нет логина' : '';


//Операторы сравнения и логические значения

//if (age < 14 || age > 90)
//if (!(age >= 14 && age <= 90))


//Преобразование типов для примитивов

//"" + 1 + 0 = "10" // (1)
//"" - 1 + 0 = -1 // (2)
//true + false = 1
//6 / "3" = 2
//"2" * "3" = 6
//4 + 5 + "px" = "9px"
//"$" + 4 + 5
// = "$45"
//"4" - 2
// = 2
//"4px" - 2
// = NaN
//7 / 0
// = Infinity
//" -9\n" + 5 = " -9\n5"
//" -9\n" - 5 = -14
//5 && 2
// = 2
//2 && 5
// = 5
//5 || 0
// = 5
//0 || 5 = 5
//null + 1 = 1 // (3)
//undefined + 1 = NaN // (4)
//null == "\n0\n" = false // (5)
//+null == +"\n0\n" = true // (6)
//Оператор "+" в данном случае прибавляет 1 как строку, и затем 0.
//Оператор "-" работает только с числами, так что он сразу приводит "" к 0.
//null при численном преобразовании становится 0
//undefined при численном преобразовании становится NaN
//При сравнении == с null преобразования не происходит, есть жёсткое правило: null == undefined и только.
//И левая и правая часть == преобразуются к числу 0.


//Циклы while, for

//for (i=2; i<=10; i++) {
//  if (!(i%2==0)) continue;
//  alert(i);
//}
//
//ИЛИ
//
//for (var i = 2; i <= 10; i++) {
//  if (i % 2 == 0) {
//    alert( i );
//  }
//}
//
//var i = 0;
//while (i<3) {
//alert ("номер " + i + "!");
//i++
//}
//
//var num;
//
//do {
//  num = prompt("Введите число больше 100?", 0);
//} while (num <= 100 && num != null);
//Цикл do..while повторяется, пока верны две проверки:
//
//Проверка num <= 100 – то есть, введённое число всё еще меньше 100.
//Проверка num != null – значение null означает, что посетитель нажал «Отмена», в этом случае цикл тоже нужно прекратить.
//Кстати, сравнение num <= 100 при вводе null даст true, так что вторая проверка необходима.
//
//Вывести простые числа
//важность: 3решение
//Схема решения
//Для всех i от 1 до 10 {
//  проверить, делится ли число i на какое - либо из чисел до него
//  если делится, то это i не подходит, берем следующее
//  если не делится, то i - простое число
//}
//Решение
//
//Решение с использованием метки:
//
// nextPrime:
//  for (var i = 2; i < 10; i++) {
//
//    for (var j = 2; j < i; j++) {
//      if (i % j == 0) continue nextPrime;
//    }
//
//    alert( i ); // простое
//  }
//Конечно же, его можно оптимизировать с точки зрения производительности. Например, проверять все j не от 2 до i, а от 2 до квадратного корня из i. А для очень больших чисел – существуют более эффективные специализированные алгоритмы проверки простоты числа, например квадратичное решето и решето числового поля.
//
//
//Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
//Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
//P.S. Код также должен легко модифицироваться для любых других интервалов.

var cont = 0;
for(var i = 2; i < 50; i++){
cont = 0;
for(var d = i; d > 0; d--){
if(i % d == 0){
cont++;
}
}
if(cont <= 2){
console.log(i);
}
}


//Конструкция switch

//if(browser == 'IE') {
//  alert('О, да у вас IE!');
//} else if (browser == 'Chrome'
// || browser == 'Firefox'
// || browser == 'Safari'
// || browser == 'Opera') {
//  alert('Да, и эти браузеры мы поддерживаем');
//} else {
//  alert('Мы надеемся, что и в вашем браузере все ок!');
//}
//
//var a = +prompt('a?', '');
//switch(a) {
//  case 0:
//    alert( 0 );
//    break;
//  case 1:
//    alert( 1 );
//    break;
//  case 2 || 3:
//    alert( '2,3' );
//    break;
//        }


//Объекты как ассоциативные массивы

//var user = {};
//user.name = 'Вася';
//user.surname = 'петров';
//user.name = 'Cthutq'
//delete user.name;

//
//Функции
//
//function min(a,b) {
//  if (a > b) {
//    return b;
//  } else {
//    return a;
//  }
//}
//
//min(2, 5) 
//min(3, -1)
//min(1, 1)
//
//function checkAge(age) {
//  if (age > 18) {
//    return true;
//  } else {
//    // ...
//    return confirm('Родители разрешили?');
//  }
//}
//
//Используя оператор '?':
//function checkAge(age) {
//  return (age > 18) ? true : confirm('Родители разрешили?');
//}
//Используя оператор || (самый короткий вариант):
//function checkAge(age) {
//  return (age > 18) || confirm('Родители разрешили?');
//}
//
//function min(a, b) {
//  if (a < b) {
//    return a;
//  } else {
//    return b;
//  }
//}
//Вариант решения с оператором '?':
//
//function min(a, b) {
//  return a < b ? a : b;
//}







//1. Из массива случайных чисел длиной 20 в диапазоне -50..50 выбрать отрицательные нечетные числа.
//
//function getRandomNumber(min, max) {
//   return Math.floor(Math.random()*(max + 1 - min)) + min;
//}
//
//function getRandomArray(length, min, max) {
//   var arr = [];
//   for (var i = 0; i < length; i++) {
//       arr[i] = getRandomNumber(min, max);
//   }
//   return arr;
//}
//
//var a = getRandomArray(20, -50, 50);
//for (var i = 0; i < a.length; i++) {
//if (a[i] < 0 && !(a[i]%2==0)) {
// alert(a[i]);
//}
//}

2. Написать функцию, которая находит максимальное значение в произвольном массиве.
var mas = ["5", "10", "11", "111", "44", "77", "57", "575", "5"];
var max = 0;
var maxNumber = "";
for (var i = 0; i < mas.length; i++) {
if (max < mas[i]) {
    max = mas[i];
    maxNumber = name;
  }
}
console.log( maxNumber );


var mas = ["5", "10", "11", "111", "44", "77", "57", "575", "5"];
var max = 0;
for (var i = 0; i < mas.length; i++) {
if (max < mas[i]) {
    max = mas[i];
  }
}
console.log( max );