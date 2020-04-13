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

function wakeUp(isWakeUpDone, callback) {
    setTimeout(() => {
        if(isWakeUpDone) {
            callback(null, 'I waked up.');
        }else{
            callback("I decided to sleep");
        }
    }, 1000);
};

function eatBreakfast(isEatBreakfastDone, callback){
    setTimeout(() => {
        if(isEatBreakfastDone) {
            callback(null, "I ate my breakfast");
        }else{
            callback("I forgot to eat breakfast");
        }
    }, 1000);
};
function takeShower(isTakeShowerDone, callback){
    setTimeout(() => {
        if(isTakeShowerDone) {
            callback(null, "I washed up.");
        }
        else{
            callback("I didn't pay my bill");
        }
    }, 1000);
};
function dressUp(isDressUpDone, callback){
    setTimeout(() => {
        if(isDressUpDone) {
            callback(null, "I got dressed.");
        }else{
            callback("Clothes are dirty.");
        }
    }, 1000);
};
function driveToWork(isDriveToWorkDone, callback){
    setTimeout(() => {
        if(isDriveToWorkDone) {
            callback(null, "I arrived at work on time");
        }else{
            callback("I didn't arrive at work today");
        }
    }, 1000);
};
function working(isWorkingDone, callback){
    setTimeout(() => {
        if(isWorkingDone) {
            callback(null, "My tasks were easy");
        }else {
            callback("My tasks were complicated");
        }
    }, 1000);
};
function dinner(isDinnerDone, callback){
    setTimeout(() => {
        if(isDinnerDone) {
            callback(null, "The dinner was superb.");
        } else{
            callback("I didn't eat my dinner");
        }
    }, 1000);
};
function coffeeBreak(isCoffeeBreakDone, callback){
    setTimeout(() => {
        if(isCoffeeBreakDone) {
            callback(null, "coffee was great");
        } else{
            callback("coffee machine was broken");
        }
    }, 1000);
};
function driveHome (isDriveHomeDone, callback){
    setTimeout(() => {
        if(isDriveHomeDone) {
            callback(null, "I arrived at home");
        } else{
            callback("completing a work");
        }
    }, 1000);
};
function eatSupper(isEatSupperDone, callback){
    setTimeout(() => {
        if(isEatSupperDone) {

            callback(null, "The dinner was delicious.");
        } else{
            callback("I didn't eat your supper");
        }
    }, 1000);
};
function studying(isStudyingDone, callback){
    setTimeout(() => {
        if(isStudyingDone) {
            callback(null, "I did exercises.");
        } else{
            callback("My studying isn't effective");
        }
    }, 1000);
};
function sleep(isSleepDone, callback){
    setTimeout(() => {
        if(isSleepDone) {
            callback(null,"sleeping.. the new day waits.");
        } else{
            callback("you can't sleep all night");
        }
    }, 1000);
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

wakeUp(isWakeUpDone, (error, data) => {
    if(error){
        console.log(error);
    }else{
        console.log(data);
        eatBreakfast(isEatBreakfastDone, (error, data) => {
            if(error){
                console.log(error);
            }else{
                console.log(data);
                takeShower(isTakeShowerDone, (error, data) => {
                    if(error){
                        console.log(error);
                    }else{
                        console.log(data);
                        dressUp(isDressUpDone, (error, data) => {
                            if(error){
                                console.log(error);
                            }else{
                                console.log(data);
                                driveToWork(isDriveToWorkDone, (error, data) => {
                                    if(error){
                                        console.log(error);
                                    }else{
                                        console.log(data);
                                        working(isWorkingDone1, (error, data) => {
                                            if(error){
                                                console.log(error);
                                            }else{
                                                console.log(data);
                                                dinner(isDinnerDone, (error, data) => {
                                                    if(error){
                                                        console.log(error);
                                                    }else{
                                                        console.log(data);
                                                        working(isWorkingDone2, (error, data) => {
                                                            if(error){
                                                                console.log(error);
                                                            }else {
                                                                console.log(data);
                                                                coffeeBreak(isCoffeeBreakDone, (error, data) => {
                                                                    if (error) {
                                                                        console.log(error);
                                                                    } else {
                                                                        console.log(data);
                                                                        working(isWorkingDone3, (error, data) => {
                                                                            if (error) {
                                                                                console.log(error);
                                                                            } else {
                                                                                console.log(data);
                                                                                driveHome(isDriveHomeDone, (error, data) => {
                                                                                    if (error) {
                                                                                        console.log(error);
                                                                                    } else {
                                                                                        console.log(data);
                                                                                        eatSupper(isEatSupperDone, (error, data) => {
                                                                                            if (error) {
                                                                                                console.log(error);
                                                                                            } else {
                                                                                                console.log(data);
                                                                                                studying(isStudyingDone, (error, data) => {
                                                                                                    if (error) {
                                                                                                        console.log(error);
                                                                                                    } else {
                                                                                                        console.log(data);
                                                                                                        sleep(isSleepDone, (error, data) => {
                                                                                                            if (error) {
                                                                                                                console.log(error);
                                                                                                            } else {
                                                                                                                console.log(data);
                                                                                                            }
                                                                                                        });
                                                                                                    }
                                                                                                });
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});