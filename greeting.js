/**
 * Creat
 *
 */

/**
 *
 * 2. Создать страницу, которая спрашивает у пользователя имя, а затем приветствует его.
 */

const userName = prompt("Введите Ваше имя?", "Имя");
alert("Здравствуйте, " + userName);

/**
 *
 * 3. Попросить пользователя ввести 2 числа A и B. Используя конструкцию if...else, вывести ему информацию о том,
 *  какое число больше, A или B.
 */

const a = +prompt("Введите число А" , "0");
const  b = +prompt("Введите число B", "0");

if(a > b){
    alert("Число А = " + a + " > " + "числа В = " + b);
}
else if(a < b) {
    alert("Число А = " + a + " < " + "числа В = " + b);
}
else {
    alert("Число А = " + a + " = " + "числу В = " + b);
}