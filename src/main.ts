// 1. Запросите у пользователя его имя и выведите в ответ: 
// «Привет, его имя!».
// let name = prompt("Введите имя")
// console.log("Привет " + name )

// 2. Запросите у пользователя год его рождения, посчитайте, 
// сколько ему лет и выведите результат. Текущий год укажите 
// в коде как константу.
// const thisYear = 2023
// let myAge = +prompt("Введите год рождения")
// console.log("Вам " + (thisYear - myAge) + " лет")

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 
// let square = +prompt("Введите сторону квадрата")
// let result = square*4
// console.log("Периметр квадрата " + result)

// 5. Запросите у пользователя расстояние в км между двумя 
// городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы 
// успеть вовремя.
// let l = +prompt('Введите расстояние')
// let time = +prompt('Введите время')
// console.log(l/time + ` км/ч`)

// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в 
// константе.
// const euro = 90
// let user = +prompt("Введите сумму в рублях")
// let user2 = user/euro
// console.log("Сумма в евро составит" + user2)

// 7. Пользователь указывает объем флешки в Гб. Программа 
// должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
// let user:number = prompt("Введите размер флешки в гб")as any
// let gb:number = 1024
// let user2 = user/gb
// let user3 = user2*820
// console.log("В флешку поместяться " + user3 + " файлов")

// 8. Пользователь вводит сумму денег в кошельке и цену одной 
// шоколадки. Программа выводит сколько шоколадок может 
// купить пользователь и сколько сдачи у него останется. 
// let user = prompt("Введите сумму денег в кошельке") as any
// let user2 = prompt("Введите сумму одной шоколадки") as any

// 9. Запросите у пользователя трехзначное число и выведите 
// его задом наперед. Для решения задачи вам понадобится 
// оператор % (остаток от деления).
// let n = 12345 + '';
// let rez = n[n.length -1];
// for(let i = n.length - 2; i >= 0; i--)
// rez += n[i];
// console.log(rez);

// 10. Запросите у пользователя целое число и выведите в ответ, 
// четное число или нет. В задании используйте логические 
// операторы. В задании не надо использовать if или switch.
// function check(num) {
// return (-1) ** num + 1 ? "чётное" : "нечётное";
// }
// const n = prompt("Введите целое число.");
// alert(check(n));



// БЛОК 2



// 1. Запросить у пользователя его возраст и определить, кем он 
// является: ребенком (0–2), подростком (12–18), взрослым 
// (18_60) или пенсионером (60– ...)
// let age = prompt('Введите ваш возраст')
// function whoAreYou(age:any) {
//     if(age>=0&&age<=11) console.log('ты ребенок') 
//     else if(age>=12&&age<=19) console.log('ты подросток')
//     else if(age>18&&age<=61) console.log('ты взрослый')
//     else if(age>60) console.log('ты пенсионер')
// }
// whoAreYou(age)

// 2. Запросить у пользователя число от 0 до 9 и вывести ему 
// спецсимвол, который расположен на этой клавише (1–!, 
// 2–@, 3–# и т. д).

// function specialCharacter() {
//     let numbers = prompt('Введите от 0 до 9');
//     let valid = /^[0-9]+$/g;
//     if(numbers == 0){
//         console.log(')')
//     }else if (numbers == 1){
//         alert('!')
//     }else if  (numbers == 2){
//         alert('@')
//     }else if  (numbers == 3){
//         alert('#')
//     }else if  (numbers == 4){
//         alert('$')
//     }else if  (numbers == 5){
//         alert('%')
//     }else if  (numbers == 6){
//         alert('^')
//     }else if  (numbers == 7){
//         alert('&')
//     }else if  (numbers == 8){
//         alert('*')
//     }else if  (numbers == 9){
//         alert('(')
//     }else if  (numbers > 9){
//         console.log('Больше 9 вводить нельзя !')
//     }else if (valid.test(numbers)){
//     }else{
//         console.log('Строки запрещены !')
//     }
// }
// specialCharacter()

// 3. Запросить у пользователя трехзначное и число и проверить, 
// есть ли в нем одинаковые цифры.
// let number = +prompt( 'Введите трехзначное число: ');
// let number1 = parseInt(number / 100);
// let number2 = parseInt(number / 10) % 10;
// let number3 = number % 10;
// if(number1===number2 || number2===number3 || number1===number3)
// console.log('Найдено совпадение цифр');
// else
// console.log('Совпадений не найдено')

// 4. Запросить у пользователя год и проверить, високосный он 
// или нет. Високосный год либо кратен 400, либо кратен 4 и 
// при этом не кратен 100.
// let year = 2023;
// if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//     console.log('Да');
// } else {
//     console.log('Нет');
// }

// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// let b;
// let c;
// let e;
// let a= +prompt("Введите пятизначное число","")
// if((a > 9999)&&(a < 100000))
// {
// b=a / 10000;
// a=a % 10000;
// c=a / 1000;
// a=a % 1000;
// a=a % 100;
// e=a / 10;
// a=a % 10;
// if ((b == a)&&(c == e))
// {
// console.log("Это число палиндром");
// }
// else {
// console.log("Это число не палиндром");
// }
// }
// else{
// console.log("Вы ввели не пятизначное");}

// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, 
// UAN или AZN, и получает в ответ соответствующую сумму.
// let user = +prompt("Введите сумму в рублях")
// let user2 = +prompt("Выберите валюту AZN,UAN,EURO")
// const euro = 90
// const uan = 30
// const azn = 20
// if (user2 == "AZN"||"UAN"||"EURO")

// 7. Запросить у пользователя сумму покупки и вывести сумму 
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 
// до 500 – 5%, от 500 и выше – 7%. 
// let user = prompt("Введите сумму ")
// let prise = 300 as any
// let prise2 = 500 as any
// let prise3 = 600 as any

// if (user < prise ) {
//    console.log("Скидка составляет 3%")
// }
// else if (user < prise2 ){
//    console.log("Скидка составляет 5%")
// }
// else if (user < prise3 ){
//    console.log("Скидка составляет 7%")
// }

// 8. Запросить у пользователя длину окружности и периметр 
// квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
// let circle = prompt("Введите длину окружности") as any 
// let square = prompt("Введите периметр квадрата ") as any
// if (circle < square) {
//    console.log("Круu поместиться в квардрат")
// }
// else{
//    console.log("Круг не поместиться")
// }


// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 
// балла. После вопросов выведите пользователю количество 
// набранных баллов.
// let arg = prompt("Cколько будет 2+2?") as any
// switch (arg) {
//    case '2':
//       alert('неправильно');
//       break;
//    case '3':
//       alert('неправильно');
//       break;
//    case '4':
//       alert('правильно');
//       break;
// }
// if (arg == "4") {
//    alert("Вам начислено 2 бонуса")
// }
// let arg2 = prompt("В каком году началась великая отечественная война") as any
// switch (arg2) {
//    case '1945':
//       alert('правильно');
//       break;
//    case '1946':
//       alert('неправильно');
//       break;
//    case '1947':
//       alert('неправильно');
//       break;
// }
// if (arg2 == "1945") {
//    alert("Вам начислено 2 бонуса")
// }
// let arg3 = prompt("Как на английском будет Яблоко") as any
// switch (arg3) {
//    case 'apple':
//       alert('правильно');
//       break;
//    case 'aple':
//       alert('неправильно');
//       break;
//    case 'orange':
//       alert('неправильно');
//       break;
// }
// if (arg3 == "apple") {
//    alert("Вам начислено 2 бонуса")
// }
// if (arg == true && arg2 == true && arg3 == true ){

//   alert(" У вас 6 баллов")
// }


// 10. Запросить дату (день, месяц, год) и вывести следующую 
// за ней дату. Учтите возможность перехода на следующий 
// месяц, год, а также високосный год.
// let arg = prompt("Какой сегодня день недели") as any
// // let arg3 = prompt("Какой сегодня год") as any
// switch (arg) {
//    case 'понедельник':
//       alert('завтра вторник');
//       break;
//    case 'вторник':
//       alert('завтра среда');
//       break;
//    case 'среда':
//       alert('завтра четверг');
//       break;
//    case 'четверг':
//       alert('завтра пятница');
//       break;
//    case 'пятница':
//       alert('завтра суббота');
//       break;
//    case 'суббота':
//       alert('завтра воскресенье');
//       break;
//    case 'воскресенье':
//       alert('завтра понедельник');
//       break;
// }
// let arg2 = prompt("Какой сегодня месяц") as any
// switch (arg2) {
//    case 'январь':
//       alert('Следующий месяц февраль');
//       break;
//    case 'февраль':
//       alert('Следующий месяц Март');
//       break;
//    case 'март':
//       alert('Следующий месяц Апрель');
//       break;
//    case 'апрель':
//       alert('Следующий месяц Май');
//       break;
//    case 'май':
//       alert('Следующий месяц Июнь');
//       break;
//    case 'июнь':
//       alert('Следующий месяц Июль');
//       break;
//    case 'июль':
//       alert('Следующий месяц Август');
//       break;
//    case 'август':
//       alert('Следующий месяц Сентябрь');
//       break;
//    case 'сентябрь':
//       alert('Следующий месяц Октябрь');
//       break;
//    case 'октябрь':
//       alert('Следующий месяц Ноябрь');
//       break;
//    case 'ноябрь':
//       alert('Следующий месяц Декабрь');
//       break;
//    case 'декабрь':
//       alert('Следующий месяц Февраль');
//       break;
// }

// Запросить у пользователя 10 чисел и подсчитать, сколько 
// он ввел положительных, отрицательных и нулей. При этом 
// также посчитать, сколько четных и нечетных. Вывести 
// статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
// let a = prompt("Введите число1"), b = prompt("Введите число2"), c=prompt("Введите число3"), d=prompt("Введите число4"), e=prompt("Введите число5")
// let num = -0
// do{
//    alert("Число положительное")
// } while (a,b,c,d,e > num)


// let x = "Альфа" 
// show("1212")
// function show(b){
//    console.log("<h4>Выполнение функции</h4>")
//    console.log("Аргумент:"+b+"</br>")
//    console.log("Переменная:"+window.x+"</br>")
// }

// function f(plusNam){
//    console.log("Аргумент: "+plusNam)
//    plusNam++
//    console.log("Аргумент: "+plusNam)
// }
// let nam =150
// console.log("Переменная: "+nam) as any
// f(nam)
// console.log("Переменная: "+nam) as any

// Подсчитать сумму всех чисел в заданном пользователем 
// диапазоне
// let a = Number(prompt("Введите начало диапазона",""));
// let n = Number(prompt("Введите конец диапазона",""));
// let sum = 0;

// while(a <= n){       
//        sum+=a;  
//        a++;
//     }

// alert(sum)

// Запросить 2 числа и найти только наибольший общий 
// делител
// const nod = (n, m) => {
//    if (m !== 0) {
//      const k = n % m;
//      return nod(m, k);
//    }
//    return n;
//  };

//  alert('Введите 2 число, что бы найти НОД')
//  let numb1 = prompt('Введите первое число');
//  let numb2 = prompt('Введите второе число');
//  alert('НОД чисел ' + numb1 + ' и ' + numb2 + ' будет: ' + nod(numb1, numb2));

// Зарплата работника составляет $250 + 10% от продаж. 
// Запросите общую сумму продаж за месяц и посчитайте 
// зарплату.
// const user = prompt("Введите общие продажи") as any
// const money = 250
// const money2 = 0.10
// let user2 = user*money2
// alert("Ваша зарплата составит "+ user2+money  )

// Вывести таблицу умножения для всех чисел от 2 до 9. 
// Каждое число необходимо умножить на числа от 1 до 10.

// const user = prompt("Введите число от 1 до 10")
// const user2= Number(user)
// for(let i=0; i<=10;i++){
//    console.log(user2 + "*" + i + "="+ i*user2)
// }

// . Определить количество цифр в введенном числе.
// let user = prompt("ВВедите число") as any
// for( let i=0; i<user.length; i++ ){
//    console.log(String(user).length)
// }


const canvas = document.getElementById("canvas")
// @ts-ignore
const ctx = canvas?.getContext("2d")
ctx.fillStyle = "green";

const addWidthButton = document.getElementById('addWidth')
const addHeightButton = document.getElementById('addHeight')
const addWidthAndHeightButton = document.getElementById('addWidthHeight')
const moveRightButton = document.getElementById('moveRight')
const moveLeftButton = document.getElementById('moveLeft')
const moveUpButton = document.getElementById('moveUp')
const moveDownButton = document.getElementById('moveDown')
// Создать объект, описывающий прямоугольник (хранит коор-
// динаты левой верхней и правой нижней точек), и написать следу-
// ющие функции для работы с таким объектом.
let rect = {
   x0: 0,
   y0: 20,
   x1: 90,
   y1: 80,
}
ctx.fillRect(rect.x0, rect.y0, getWidth(rect), getHeight(rect))
function showCoordinates(rect: any) {
   console.log(`(${rect.x0},${rect.y0}) (${rect.x1},${rect.y1})`)
}
function showRect(rect: any) {
   // @ts-ignore
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   ctx.fillRect(rect.x0, rect.y0, getWidth(rect), getHeight(rect));
}
showCoordinates(rect)

function getWidth(rect: any) {
   return rect.x1 - rect.x0
}
console.log(getWidth(rect))

function getHeight(rect: any) {
   return rect.y1 - rect.y0
}
console.log(getHeight(rect))

function getArea(rect: any) {
   return getWidth(rect) * getHeight(rect)
}
console.log(getArea(rect))
function getPerimetr(rect: any) {
   return getWidth(rect) + getHeight(rect) * 2
}
console.log(getPerimetr(rect))

function addHeight(rect: any, num: number) {
   rect.y1 += num
   showRect(rect)
}
function addWidth(rect: any, num: number) {
   rect.x1 += num
   showRect(rect)
}
function moveX(rect: any, num: number) {
   rect.x0 += num
   rect.x1 += num
   showRect(rect)
}
function moveY(rect: any, num: number) {
   rect.y0 += num
   rect.y1 += num
   showRect(rect)
}



if (addHeightButton) addHeightButton.addEventListener('click', () => {
   addHeight(rect, 5)
})
if (addWidthButton) addWidthButton.addEventListener('click', () => {
   addWidth(rect, 5)
})
if (addWidthAndHeightButton) addWidthAndHeightButton.addEventListener('click', () => {
   addWidth(rect, 5)
   addHeight(rect, 5)
})
if (moveRightButton) moveRightButton.addEventListener('click', () => {
   moveX(rect, 5)
})
if (moveLeftButton) moveLeftButton.addEventListener('click', () => {
   moveX(rect, -5)
})
if (moveUpButton) moveUpButton.addEventListener('click', () => {
   moveY(rect, -5)
})
if (moveDownButton) moveDownButton.addEventListener('click', () => {
   moveY(rect, 5)
})



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  Функция принимает массив и выводит его на экран.
function arr2() {
   console.log(arr)
}
arr2()

// Функция принимает массив и выводит только четные
// элементы.
function evenArr() {
   const arr3 = [] as any[];
   for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element % 2 == 0) arr3.push(element);
   }
   console.log(arr3)
}
evenArr()

// Функция принимает массив и возвращает сумму всех
// элементов массива.
function arr4() {
   let sum = 0;
   for (let i in arr) {
      sum = sum + arr[i];
   }
   console.log(sum)
}
arr4()

//   Функция принимает массив и возвращает его максималь-
//   ный элемент.
function getMaxOfArray() {
   Math.max(...arr);
   console.log(arr)
}
getMaxOfArray()
// Функция добавления нового элемента в массив по ука-
// занному индексу.
function add() {
   arr.push(11)
   console.log(arr)
}
add()
// Функция удаления элемента из массива по указанному
// индексу.
function del() {
   arr.splice(0, 1)
   console.log(arr)
}
del()

// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из двух массивов
// без повторений.

// function newArr() {
//     let arr3 = arr.concat(myarr);
//     let unique = Array.from(new Set(arr3));
//     return unique;
//   }
//   console.log(newArr(arr, myarr));
// Функция принимает 2 массива и возвращает новый массив,
// в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах)
// без повторений.

// function newArr2() {
//     let arrr = arr.filter((num) => myarr.includes(num));
//     return arrr;
//   }
//   console.log(newArr2(arr, myarr));
// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из первого массива,
// которых нет во втором массиве.

// Задание 3
// Создать массив фруктов и отсортировать его по алфавиту.
// Написать следующие функции.


// Вывод на экран с помощью document.write() в виде списка
// (с помощью тегов ul и li).

// Поиск фрукта в массиве. Функция принимает название
// фрукта и возвращает индекс найденного элемента или -1,
// если не найден. Поиск должен быть нерегистрозависимым.

// Задание 1
// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

const PI = 3.14
class Circle{
   #R
   constructor(R:number){
      this.#R = R
   }
   get radius(){
      return this.#R
   }
   set radius(radius){
      this.#R = radius
   }
   get diametr(){
      return this.#R*2
   }
   square(){
      return this.#R**2 * Math.PI
   }
   perimetr(){
      return this.#R * 2 * Math.PI
   }
}

const myCircle = new Circle(25)
console.log('radius', myCircle.radius)
myCircle.radius = 20
console.log('radius', myCircle.radius)
console.log('diametr', myCircle.diametr)
console.log('square', myCircle.square())
console.log('perimetr', myCircle.perimetr())

 


// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец текущего элемента;
// ■ метод для добавления вложенного элемента в начало текущего элемента;
// ■ метод getHtml(), который возвращает html код в виде
// строки, включая html код вложенных элементов.

class HtmlElement {
   tag:string
   single:boolean
   text:string
   atributes:string[] = []
   styles:string[] = []
   elements:HtmlElement[] = []
   constructor(tag:string, single:boolean, text:string) {
      this.tag = tag
      this.single = single
      this.text = text
   }
   addAtribute(atribute:string) {
      this.atributes.push(atribute)
   }
   addStyle(style:string) {
      this.styles.push(style)
   }
   unshiftElement(el:HtmlElement) {
      if (this.single) return false
      this.elements.unshift(el)
   }
   pushElement(el:HtmlElement) {
      if (this.single) return false
      this.elements.push(el)
   }
   getHtml():string {
      if (this.single) {
         return `<${this.tag} ${this.atributes.join(' ')} style="${this.styles.join(';')}" value="${this.text}">`
      }
      const begin = `<${this.tag} ${this.atributes.join(' ')} style="${this.styles.join(';')}">${this.text}`
      const end = `</${this.tag}>`
      return begin + this.elements.map(el=>el.getHtml()).join('') + end
   }
}

const divElement = new HtmlElement('div',false,'some text')

divElement.addAtribute('id="generatedP"')
divElement.addStyle('color:green')
divElement.addStyle('font-size:18px')
divElement.addStyle('padding:10px')

const imgElement = new HtmlElement('img',true, '')
imgElement.addAtribute('src="https://eduard0606.github.io/Portfolio/assets/SQsFQIo7NTM-aa1b387f.jpg"')
imgElement.addStyle('width:100px')

const aElement = new HtmlElement('a',false, 'portfolio')
aElement.addAtribute('href="https://eduard0606.github.io/Portfolio/"')
aElement.addAtribute('target="_blank"')

const olElement = new HtmlElement('ol', false, '')
const liElement = new HtmlElement('li', false, 'string')

olElement.pushElement(liElement)
olElement.pushElement(liElement)
olElement.pushElement(liElement)
olElement.pushElement(liElement)

divElement.pushElement(aElement)
divElement.unshiftElement(new HtmlElement('button', false, "i'm not work"))
divElement.pushElement(imgElement)
divElement.pushElement(olElement)

const pElement = new HtmlElement('p',false,'hello')

console.log(divElement)

const renderDiv = document.getElementById('render')
if (renderDiv) renderDiv.innerHTML = divElement.getHtml()
if (renderDiv) renderDiv.innerHTML += pElement.getHtml()


// class Clock {
//    constructor({ template }) {
//      this.template = template;
//    }
 
//    render() {
//      let date = new Date();
 
//      let hours = date.getHours();
//      if (hours < 10) hours = '0' + hours;
 
//      let mins = date.getMinutes();
//      if (mins < 10) mins = '0' + mins;
 
//      let secs = date.getSeconds();
//      if (secs < 10) secs = '0' + secs;
 
//      let output = this.template
//        .replace('h', hours)
//        .replace('m', mins)
//        .replace('s', secs);
 
//      console.log(output);
//    }
 
//    stop() {
//      clearInterval(this.timer);
//    }
 
//    start() {
//      this.render();
//      this.timer = setInterval(() => this.render(), 1000);
//    }
//  }
 
 
//  let clock = new Clock({template: 'h:m:s'});
//  clock.start()
