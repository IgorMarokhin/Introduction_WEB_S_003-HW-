/*
Cоздать функцию greeting, которая принимает в качестве аргумента имя человека
и выводит приветствие, используя переданное ей имя, в консоль.
Необходимо у пользователя запросить имя и вызвать функцию greeting,
передав туда полученное от пользователя значение.
*/

function greeting() {
    console.log(`Привет, ${Name} !`);
}

let Name = prompt("Введите Ваше имя: ");
greeting(Name);