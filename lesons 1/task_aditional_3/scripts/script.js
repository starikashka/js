let content = document.getElementById("content");
let rules = document.getElementById("rules");
let fc_rules;


    content.innerText = "New text in content";
    rules.innerText = "New text in rules";

    content.style.cssText = "background: red; color: blue;";
    rules.style.cssText = "background: red; color: blue;";

    console.log(rules.classList);
    fc_rules = document.getElementsByClassName("fc_rules");

    for(let i=0; i<fc_rules.length; i++){
        fc_rules[i].style.color = "red";
    }
