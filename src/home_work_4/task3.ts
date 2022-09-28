const str1 = "Дана произвольная строка";
const str2 = "нет строки";

if (str1.indexOf(str2) < str1.length) {
  console.log("Вы находитесь в границах строки");
} else {
  console.log(`Вы вышли за границу строки`);
}
