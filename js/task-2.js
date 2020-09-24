// const total = 100;
// const ordered = 150;

// if (total < ordered) {
//   const message = `На складе недостаточно твоаров!`;
//   console.log(message);
// } else {
//   const message = `Заказ оформлен, с вами свяжется менеджер`;
//   console.log(message);
// }
// const invoice = 100;
// const stock = 100;

// // Write code under this line
// const message = invoice <= stock ? 'Заказ оформлен, с вами свяжется менеджер' : "На складе недостаточно товаров!";

// const userPassword = "jqueryismyjam";
// const ADMIN_PASSWORD = "jqueryismyjam";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_IS_ALLOWED = "Добро пожаловать!";
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
// let message;

// // Write code under this line
// if (userPasword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPasword === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = ACCESS_DENIED;
// }
// console.log(message);
let countryName;
let country;
countryName = prompt(`Type`);
country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
console.log(country);
