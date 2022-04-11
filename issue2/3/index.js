function checkFriday(date) {
    return date.getDay() === 5
}

const lifeExpectancy = 76
const dateBirthday = prompt("yyyy-m-d").split("-")
// устанавливаем сразу дату в 20 лет
const date = new Date(+dateBirthday[0] + 20, +dateBirthday[1] - 1, +dateBirthday[2])

let countFriday = 0;

while (date.getFullYear() - dateBirthday[0] <= lifeExpectancy) {
    if (checkFriday(date)) {
        countFriday += 1
    }
    date.setFullYear(date.getFullYear() + 10)
}

console.log("count friday: " + countFriday)