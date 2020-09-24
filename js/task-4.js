let credits = 23580;
const pricePerDroid = 3000;
let droidAmount = prompt("Сколько дроидов желаете купить?");
droidAmount = Number(droidAmount);
const totalPrice = droidAmount * 3000;
if (droidAmount < 1) {
  console.log("Отменено пользователем!");
} else {
  if (credits < totalPrice) {
    const message = `Недостаточно средств на счету!`;
    console.log(message);
  } else {
    credits = credits - totalPrice;
    const message = `Вы купили ${droidAmount} дроидов, на счету осталось ${credits} кредитов.`;
    console.log(message);
  }
}
