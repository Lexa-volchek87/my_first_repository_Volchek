const date: Date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const day = date.getDate();
const date0 = month + "/" + year + "/" + day;

console.log("текущая дата:  " + date0 + ". Текущее время " + date.toLocaleTimeString());
