function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomnumber = Math.floor(Math.random()* 3);
    console.log(choices[randomnumber]);
}