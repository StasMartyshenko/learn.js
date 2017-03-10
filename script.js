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

Решение задачи на языке JavaScript.

<script>
var cont = 0;
for(var i = 2; i < 500000; i++) {
	cont = 0;
	for(var a = i; a > 0; a--) {
		if(i % a == 0){
			cont++;
		}
	}
	if(cont <= 2) {
		console.log(i);
	}
}
</script>

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


//Объекты: перебор свойств
//
//function isEmpty(obj) { 
//var counter = 0;
//for (var key in obj) { я написал isEmpty =)
//  counter++;
//}
//if (counter == 0){
//return true;
//} else {
//return false;
//}
//}
//var schedule = {};
//alert( isEmpty(schedule) ); // true
//schedule["8:30"] = "подъём";
//alert( isEmpty(schedule) ); // false
// 
//аналогично на лерне:
//
//function isEmpty(obj) {
//  for (var key in obj) {
//    return false;
//  }
//  return true;
//}
//
//var schedule = {};
//alert( isEmpty(schedule) ); // true
//schedule["8:30"] = "подъём";
//alert( isEmpty(schedule) ); // false
//
//"use strict";
//var salaries = {
//  "Вася": 100,
//  "Петя": 300,
//  "Даша": 250
//};
//var count = 0;
//for (var key in salaries) {
//var b = salaries[key];
//var count = count + b;
//}
//console.log (count);
//
//"use strict";
//var salaries = {
//  "Вася": 100,
//  "Петя": 300,
//  "Даша": 250
//};
//var number = 0;
//var name = "0";
//for (key in salaries) {
//if (salaries[key] > number) {
//number = salaries[key];
//name = key;
//}
//}
//console.log ( name+ ':'  +number);
//VM929:17 Петя:300
//
//var menu = {
//  width: 200,
//  height: 300,
//  title: "My menu"
//};
//
//Для проверки на число используйте функцию:
//function isNumeric(n) {
//  return !isNaN(parseFloat(n)) && isFinite(n);
//}
//
//function multiplyNumeric(obj) {
//  for (var key in obj) {
//    if (isNumeric(obj[key])) {
//      obj[key] *= 2;
//    }
//  }
//}
//
//multiplyNumeric(menu);
//
//alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
//
//
//Массивы с числовыми индексами !!! >Поиск в массиве >Решето Эратосфена > Подмассив наибольшей суммы
//
//var arr = ["Ябо", "Апельсин", "Груша", "Лимон"];
//var rand = Math.floor(Math.random() * arr.length);Код для генерации случайного целого от min to max включительно:
//console.log (arr[rand]);
//
//var numbers = [];
//while (true) {
//  var value = prompt("Введите число", 0);
//  if (value === "" || value === null || isNaN(value)) break;
//  numbers.push(+value);
//}
//var sum = 0;
//for (var i = 0; i < numbers.length; i++) {
//  sum += numbers[i];
//}
//alert( sum );
//
//var arr2 = [];
//for (var i = 0; i < arr.length; i++) arr2[i] = arr[i]; Если нужно именно скопировать массив, то это можно сделать, например, так:

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
/**
 * Возводит x в степень n (комментарий JSDoc)
 *
 * @param {number} x число, которое возводится в степень
 * @param {number} n степень, должна быть целым числом больше 1
 *
 * @return {number} x в степени n
 */
//function pow(x, n) {
//  var result = x;
//
//  for (var i = 1; i < n; i++) {
//    result *= x;
//  }
//
//  return result;
//}
//
//var x = prompt("x?", '');
//var n = prompt("n?", '');
//
//if (n <= 1) {
//  alert('Степень ' + n +
//    'не поддерживается, введите целую степень, большую 1'
//  );
//} else {
//  alert( pow(x, n) );
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


//Псевдомассив аргументов "arguments"
//function f (x) { 
//for (var i = 0; i < arguments.length; i++) {
//    return 1;
//}
//  return 0;
//}
//
//function sum () {
//var a = 0;
//for (i=0; i<arguments.length; i++) {
//a += arguments[i];
//
//}
//return a;
//}
//
//console.log (sum(10, 2));
//VM877:10 12


//Строки
//
//function ucFirst(str) {
//  // только пустая строка в логическом контексте даст false
//  if (!str) return str;
//  return str[0].toUpperCase() + str.slice(1);
//}
//alert( ucFirst("вася") );
//
//function checkSpam(str) {
//  var lowerStr = str.toLowerCase();
//  return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
//}
//alert( checkSpam('buy ViAgRA now') );
//alert( checkSpam('free xxxxx') );
//alert( checkSpam("innocent rabbit") );
//
//function truncate(str, maxlength) {
//  if (str.length > maxlength) {
//    return str.slice(0, maxlength - 3) + '...';
//    // итоговая длина равна maxlength
//  }
//  return str;
//}
//alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
//alert( truncate("Всем привет!", 20) );


//Массивы: методы
//
//function addClass(obj, cls) {
//  var classes = obj.className ? obj.className.split(' ') : [];
//  for (var i = 0; i < classes.length; i++) {
//    if (classes[i] == cls) return; // класс уже есть
//  }
//  classes.push(cls); // добавить
//
//  obj.className = classes.join(' '); // и обновить свойство
//}
//var obj = {
//  className: 'open menu'
//};
//addClass(obj, 'new');
//addClass(obj, 'open');
//addClass(obj, 'me');
//alert(obj.className) // open menu new me
//
//function camelize(str) {
//  var arr = str.split('-');
//  for (var i = 1; i < arr.length; i++) {
//    // преобразовать: первый символ с большой буквы
//    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//  }
//  return arr.join('');
//}
//alert( camelize("background-color") ); // backgroundColor
//alert( camelize("list-style-image") ); // listStyleImage
//alert( camelize("-webkit-transition") ); // WebkitTransition
//function removeClass(obj, cls) {
//  var classes = obj.className.split(' ');
//
//  for (var i = 0; i < classes.length; i++) {
//    if (classes[i] == cls) {
//      classes.splice(i, 1); // удалить класс
//      i--; // (*)
//    }
//  }
//  obj.className = classes.join(' ');
//}
//var obj = {
//  className: 'open menu menu'
//}
//removeClass(obj, 'blabla');
//removeClass(obj, 'menu')
//alert(obj.className) // open
//
//var arr = [5, 2, 1, -10, 8];
//function compareReversed(a, b) {
//  return b - a;
//}
//arr.sort(compareReversed);
//alert( arr );
//
//var arr = [1, 2, 3, 4, 5];
//function compareRandom(a, b) {
//  return Math.random() - 0.5;
//}
//arr.sort(compareRandom);
//alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
//
//function aclean(arr) {
//  // этот объект будем использовать для уникальности
//  var obj = {};
//  for (var i = 0; i < arr.length; i++) {
//    // разбить строку на буквы, отсортировать и слить обратно
//    var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)
//    obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
//  }
//  var result = [];
//  // теперь в obj находится для каждого ключа ровно одно значение
//  for (var key in obj) result.push(obj[key]);
//  return result;
//}
//var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
//alert( aclean(arr) );

//
//Массив: перебирающие методы
//
//var arr = ["Есть", "жизнь", "на", "Марсе"];
//var arrLength = arr.map(function(item) {
//  return item.length;
//});
//alert( arrLength ); // 4,5,2,5
//
//Дата и Время
//function getWeekDay(date) {
//  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//  return days[date.getDay()];
//}
//var date = new Date(2014, 0, 3); // 3 января 2014
//alert( getWeekDay(date) ); // 'пт'


Локальные переменные для объекта

function makeCounter() {
  var currentCount = 1;
  return function() {
    return currentCount++;
  };
}
var counter = makeCounter();
// каждый вызов возвращает результат, увеличивая счётчик
alert( counter() ); // 1
alert( counter() ); // 2
alert( counter() ); // 3

function makeBuffer() {
  var text = '';
  return function(piece) {
    if (arguments.length == 0) { // вызов без аргументов
      return text;
    }
    text += piece;
  };
};
var buffer = makeBuffer();
// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert( buffer() ); // 'Замыкания Использовать Нужно!'
var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);
alert( buffer2() ); // '010'













СПРОСИТЬ КАК РАБОТАЕТ!!!
var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "Иа"; // цель поиска

var pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}


function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (val < a || val > b) {
      arr.splice(i--, 1);  //i--? начиная с позиции, удалить 1 элемент
    }
  }
}
var arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
alert( arr ); // [3, 1]


