function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomnumber = Math.floor(Math.random()* 3);
    let Computer = choices[randomnumber];
    return Computer;
}

function roundplay(playerselection, computerSelection){
    var selection = playerselection.toLowerCase();
    var computerselect = computerSelection();
    console.log(computerselect);
    if (selection == 'rock' && computerselect == 'Rock'){
        return "Tie!";
    }
    else if (selection == 'rock' && computerselect == 'Paper'){
        return "You lose, paper beats rock!";
    }
    else if (selection == 'rock' && computerselect == 'Scissors'){
        return "You win, rock beats scissors!";
    }




    else if (selection == 'scissors' && computerselect == 'Rock'){
        return "You lose, rock beats scissors!";
    }
    else if (selection == 'scissors' && computerselect == 'Paper'){
        return "You win, scissors beats paper!";
    }
    else if (selection == 'scissors' && computerselect == 'Scissors'){
        return "Tie!";
    }



    else if (selection == 'paper' && computerselect == 'Rock'){
        return "You win, paper beats rock!";
    }
    else if (selection == 'paper' && computerselect == 'Paper'){
        return "Tie!";
    }
    else if (selection == 'paper' && computerselect == 'Scissors'){
        return "You lose, scissors beat paper!";
    }
}

function game(){
    for (let i=0; i<5; i++){
        roundplay(prompt(), getComputerChoice)
    }
}