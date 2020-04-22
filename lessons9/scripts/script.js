// Зробити свій розпоряжок дня.
//
//     Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
//     Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
//     Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
//     Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
//     Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//
//     Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу.
//     Або йдучи на обід ви забули гаманець і лишились голодні.

function wakeUp(isWakeUpDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isWakeUpDone) {
                resolve('I waked up.');
            }else{
                reject("I decided to sleep");
            }
        }, 1000);
    });
};

function eatBreakfast(isEatBreakfastDone){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isEatBreakfastDone) {
                resolve("I ate my breakfast");
            }else{
                reject("I forgot to eat breakfast");
            }
        }, 1000);
    });
};
function takeShower(isTakeShowerDone){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isTakeShowerDone) {
                resolve("I washed up.");
            }
            else{
                reject("I didn't pay my bill");
            }
        }, 1000);
    });
};
function dressUp(isDressUpDone){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isDressUpDone) {
                resolve("I got dressed.");
            }else{
                reject("Clothes are dirty.");
            }
        }, 1000);
    });
};
function driveToWork(isDriveToWorkDone){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isDriveToWorkDone) {
                resolve("I arrived at work on time");
            }else{
                reject("I didn't arrive at work today");
            }
        }, 1000);
    });
};
function working(isWorkingDone){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isWorkingDone) {
                resolve("My tasks were easy");
            }else {
                reject("My tasks were complicated");
            }
        }, 1000);
    });
};
function dinner(isDinnerDone){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isDinnerDone) {
                resolve("The dinner was superb.");
            } else{
                reject("I didn't eat my dinner");
            }
        }, 1000);
    });
};
function coffeeBreak(isCoffeeBreakDone){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isCoffeeBreakDone) {
                resolve("coffee was great");
            } else{
                reject("coffee machine was broken");
            }
        }, 1000);
    });
};
function driveHome (isDriveHomeDone){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isDriveHomeDone) {
                resolve("I arrived at home");
            } else{
                reject("completing a work");
            }
        }, 1000);
    });
};
function eatSupper(isEatSupperDone){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isEatSupperDone) {
                resolve("The dinner was delicious.");
            } else{
                reject("I didn't eat your supper");
            }
        }, 1000);
    });
};
function studying(isStudyingDone){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isStudyingDone) {
                resolve("I did exercises.");
            } else{
                reject("My studying isn't effective");
            }
        }, 1000);
    });
};
function sleep(isSleepDone){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isSleepDone) {
                resolve("sleeping.. the new day waits.");
            } else{
                reject("you can't sleep all night");
            }
        }, 1000);
    });
};
let isWakeUpDone = true,
    isEatBreakfastDone = true,
    isTakeShowerDone = true,
    isDressUpDone = true,
    isDriveToWorkDone = true,
    isWorkingDone1 = true,
    isWorkingDone2 = true,
    isWorkingDone3 = true,
    isDinnerDone = true,
    isCoffeeBreakDone = true,
    isDriveHomeDone = true,
    isEatSupperDone = true,
    isStudyingDone = true,
    isSleepDone = true;

wakeUp(isWakeUpDone)
    .then(value => {
        console.log(value);
        return eatBreakfast(isEatBreakfastDone);
    })
    .then(value => {
        console.log(value);
        return takeShower(isTakeShowerDone);
    })
    .then(value => {
        console.log(value);
        return dressUp(isDressUpDone);
    })
    .then(value => {
        console.log(value);
        return driveToWork(isDriveToWorkDone);
    })
    .then(value => {
        console.log(value);
        return working(isWorkingDone1);
    })
    .then(value => {
        console.log(value);
        return dinner(isDinnerDone);
    })
    .then(value => {
        console.log(value);
        return working(isWorkingDone2);
    })
    .then(value => {
        console.log(value);
        return coffeeBreak(isCoffeeBreakDone);
    })
    .then(value => {
        console.log(value);
        return working(isWorkingDone3);
    })
    .then(value => {
        console.log(value);
        return driveHome (isDriveHomeDone);
    })
    .then(value => {
        console.log(value);
        return eatSupper(isEatSupperDone);
    })
    .then(value => {
        console.log(value);
        return studying(isStudyingDone);
    })
    .then(value => {
        console.log(value);
        return sleep(isSleepDone);
    })
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.log(reason);
    })