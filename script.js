function getComputerChoice(max=3){
    let i=Math.floor(Math.random() * max);
        if (i===0){
            return 'Rock';
        }else if (i===1){
            return 'Paper';
        }else{
            return 'Scissor';
        }
}

function getHumanChoice(){
    let answer=parseInt(prompt('Choose 0 for rock, 1 for paper, 2 for scissors:'));
    if (answer===0){
        return 'Rock';
    }else if (answer===1){
        return 'Paper';
    }else{
        return 'Scissor';
    }
}

function playRound(computerChoice,humanChoice){
    if (computerChoice===humanChoice){
        return 'It is a tie';
    }
    else if (computerChoice==='Rock' && humanChoice==='Scissor'){
        return `You Lose`;
    }else if (computerChoice==='Paper' && humanChoice==='Rock'){
        return `You Lose`;
    }else if (computerChoice==='Scissor' && humanChoice==='Paper'){
        return `You Lose`;
    }
    else if (computerChoice==='Rock' && humanChoice==='Paper'){
        return `You Win`;
    }else if (computerChoice==='Paper' && humanChoice==='Scissor'){
        return `You Win`;
    }else if (computerChoice==='Scissor' && humanChoice==='Rock'){
        return `You Win`;
    }
}

function playGame(rounds){
    let humanScore=0;
    let computerScore=0;
    for (i=1; i<=rounds ;i++){
        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        let result=playRound(computerChoice,humanChoice);
            if (result==='You Win'){
                humanScore++;
                console.log(`You Won round ${i},Your Score:${humanScore},Computer Score:${computerScore}`)
            }else if(result==='You Lose'){
                computerScore++;
                console.log(`You Lost round ${i},Your Score:${humanScore},Computer Score:${computerScore}`)
            }else{
                console.log(`You Tied round ${i},Your Score:${humanScore},Computer Score:${computerScore}`)
            }
        }
    console.log(`Final Score-You:${humanScore},Computer:${computerScore}`)
    }
let rounds=parseInt(prompt('Select the number of Rounds:'))
playGame(rounds)
