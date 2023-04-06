var temp_C = prompt("Введите температуру в градусах Цельсия: ")
var temp_F = (9 / 5) * temp_C + 32
var temp_F_short = Math.round(temp_F)
var massage = ("Цельсий: " + temp_C + ", " + "Фаренгейт: " + temp_F_short)
alert(massage)