function userCard(number) {

        let balance=100,
        transactionLimit=100,
        historyLogs=[],
        key= number;

    return{
        getCardOptions: function () {
            return {balance:balance, transactionLimit:transactionLimit, historyLogs:historyLogs, key:key};
        },
        putCredits: function (money) {
            balance += money;
            historyLogs.push({operationType:"Received credits", money: money, operationTime: new Date().toLocaleString()})
        },
        takeCredits: function (money) {
            if(balance + transactionLimit >= money){
                if(balance > money){
                    balance -= money;}
                else {
                    transactionLimit -= (money - balance);
                    balance = 0;
                }
            historyLogs.push({operationType:'Withdrawal of credits', money: money, operationTime: new Date().toLocaleString()});
            }else{
                console.error(`Error. You do not enough money, Balance:${balance}, Limit:${transactionLimit}`);
            }
        },
        setTransactionLimit: function (money) {
            transactionLimit = money;
            historyLogs.push({operationType:'Transaction limit change', credits: money, operationTime: new Date().toLocaleString()});
        },
        transferCredits: function (money, userCard) {
            if(balance + transactionLimit >= money){
                if(balance > money){
                    balance -= money;}
                else {
                    transactionLimit -= (money - balance);
                    balance = 0;
                }
                userCard.putCredits(money);
                //historyLogs.push({operationType:'Transfer credits', card:userCard.getCardOptions().key, operationTime: new Date().toLocaleString()});
                historyLogs.push({operationType:'Transaction limit change', credits: money, operationTime: new Date().toLocaleString()});
            } else{
                console.error(`Error. You do not enough money, Balance:${balance}, Limit:${transactionLimit}`);
            }
        }
    }
}

class UserAccount{
    constructor(name){
        this.name = name;
        this.cards = [];
    }

    addCard(){
        if(this.cards.length < 3){
            const card = userCard(this.cards.length+1);
            this.cards.push(card);
        } else {
            console.error("card limit exceeded");
        }
    }
    getCardByKey(number){
        if(number > this.cards.length){
            console.error("Credit card doesn't exist");
        }else{
            return this.cards[number-1];
        }
    }
}

let user = new UserAccount('Bob');
user.addCard();
user.addCard();

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

console.log(card1.getCardOptions());
console.log("add 500 to card1");
card1.putCredits(500);
console.log(card1.getCardOptions());

console.log("set Transaction Limit 800 card1");
card1.setTransactionLimit(800);
console.log(card1.getCardOptions());

console.log("transfer 300 to card2");
card1.transferCredits(300, card2);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

console.log("take 50  from card2");
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());