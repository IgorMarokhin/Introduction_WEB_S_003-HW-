
const temp_C = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
const temp_F = ((9 / 5) * temp_C + 32).toFixed(2);
let massage = ("Цельсий: " + temp_C + ", " + "Фаренгейт: " + temp_F);
alert(massage);