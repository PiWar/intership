/**
 * проверка дня на то, является ли он пятницей
 * @param {Date} date - дата для проверки
 * @return {Boolean} - результат проверки
 */
const checkDateIsFriday = date => {
    return date.getDay() === 5
}

/**
 * добавление к дате указанное количество лет
 * @param {Date} date - дата к которой добавляются года
 * @param {Number} years - количество добавляемых лет
 */
const addYearsForDate = (date, years) => {
    date.setFullYear(date.getFullYear() + years)
}

/**
 * поиск кол - ва пятниц в день рождения для человека начиная с 20 лет до средней продолжительности жизни каждые 10 лет
 * @param {Date} date - дата рождения
 * @return {Number} - кол - во дней рождения в пятницу
 */
const searchFriday = date => {
    const birthdayYear = date.getFullYear()
    // средняя длина жизни в России
    const lifeExpectancy = 76
    // кол - во лет, прибавляемые в каждой итерации
    const iterationYears = 10
    // кол - во лет, с которых начать отсчет пятниц
    const startAge = 20;
    addYearsForDate(date, startAge);
    // количество найденных пятниц
    let countFriday = 0

    while (date.getFullYear() - birthdayYear <= lifeExpectancy) {
        if (checkDateIsFriday(date)) {
            countFriday += 1
        }
        addYearsForDate(date, iterationYears)
    }
    return countFriday
}
// вводимая пользователем дата рождения
const dateBirthday = prompt("yyyy-m-d")
// перевод даты рождения в тип Date
const date = new Date(dateBirthday)
console.log("count friday: " + searchFriday(date))