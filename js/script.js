
let userName = prompt("Как вас зовут?").trim().toLowerCase();
let userAge = prompt("Сколько вам лет?").trim();
if (userAge <= 6) {
   alert("Иди в садик!")
} else if (userAge < 18) {
   alert("Тебе нельзя сюда!")
} else if (userAge <= 80) {
   alert(`Проходите ${userName}!`)
   let listP = prompt("Что вы хотите попрабовать Вино/Пепси/Спрайт/Кола").trim().toLowerCase();
   switch (listP) {
      case "вино":
         let menuListOfVino = prompt("Какое блюда хотите попробовать стейк средний прожарки/стейк выший прожарки/стейк малой прожарки").trim().toLowerCase();
         if (menuListOfVino === "стейк средний прожарки" || menuListOfVino === "стейк выший прожарки" || menuListOfVino === "стейк малой прожарки") {
            alert("Заказ будет выполнен через 15 минут!")
         } else {
            alert("В в меню такого блюда нет")
         }
         break;
      case "пепси":
         let menuListOfFast = prompt("Какое блюда хотите попробовать Бургер/Крылошки/Шаурма").trim().toLowerCase();
         if (menuListOfFast === "Бургер" || menuListOfFast === "Крылошки" || menuListOfFast === "Шаурма") {
            alert("Заказ будет выполнен через 15 минут!")
         } else {
            alert("В в меню такого блюда нет")
         }
         break;
      case "спрайт":
         let menuListOfFastS = prompt("Какое блюда хотите попробовать Бургер/Крылошки/Шаурма").trim().toLowerCase();
         if (menuListOfFastS === "Бургер" || menuListOfFastS === "Крылошки" || menuListOfFastS === "Шаурма") {
            alert("Заказ будет выполнен через 15 минут!")
         } else {
            alert("В в меню такого блюда нет")
         }
         break;
      case "кола":
         let menuListOfFastС = prompt("Какое блюда хотите попробовать Бургер/Крылошки/Шаурма").trim().toLowerCase();
         if (menuListOfFastС === "Бургер" || menuListOfFastС === "Крылошки" || menuListOfFastС === "Шаурма") {
            alert("Заказ будет выполнен через 15 минут!")
         } else {
            alert("В в меню такого блюда нет")
         }
         break;
      default:
         alert("К сожилению у наc нету этого блюда в меню");
         let er = comfirm("Вы хотите посматреть меню!");
         if (er === true) {
            let listP = prompt("Что вы хотите попрабовать Вино/Пепси/Спрайт/Кола");
            switch (listP) {
               case "Вино":
                  let menuListOfVinoone = prompt("Какое блюда хотите попробовать стейк средний прожарки/стейк выший прожарки/стейк малой прожарки").trim().toLowerCase();
                  if (menuListOfVinoone === "стейк средний прожарки" || menuListOfVinoone === "стейк выший прожарки" || menuListOfVinoone === "стейк малой прожарки") {
                     alert("Заказ будет выполнен через 15 минут!")
                  } else {
                     alert("В в меню такого блюда нет")
                  }
                  break;
               case "Пепси":
                  let menuListOfFastY = prompt("Какое блюда хотите попробовать Бургер/Крылошки/Шаурма").trim().toLowerCase();
                  if (menuListOfFastY === "Бургер" || menuListOfFastY === "Крылошки" || menuListOfFastY === "Шаурма") {
                     alert("Заказ будет выполнен через 15 минут!")
                  } else {
                     alert("В в меню такого блюда нет")
                  }
                  break;
               case "Спрайт":
                  let menuListOfFastSY = prompt("Какое блюда хотите попробовать Бургер/Крылошки/Шаурма").trim().toLowerCase();
                  if (menuListOfFastSY === "Бургер" || menuListOfFastSY === "Крылошки" || menuListOfFastSY === "Шаурма") {
                     alert("Заказ будет выполнен через 15 минут!")
                  } else {
                     alert("В в меню такого блюда нет")
                  }
                  break;
               case "Кола":
                  let menuListOfFastСY = prompt("Какое блюда хотите попробовать Бургер/Крылошки/Шаурма").trim().toLowerCase();
                  if (menuListOfFastСY === "Бургер" || menuListOfFastСY === "Крылошки" || menuListOfFastСY === "Шаурма") {
                     alert("Заказ будет выполнен через 15 минут!")
                  } else {
                     alert("В в меню такого блюда нет")
                  }
                  break;
               default:
                  alert("К сожилению у наc нету этого блюда в меню");
                  let er = comfirm("Пока!");
            }
         } else {
            alert("Пока")
         }
   }
} else if (userAge <= 999999999999999999999) {
   alert("Вам не много осталось идите отдахните дома!")
} else {
   alert("Это не чифра!")
}

