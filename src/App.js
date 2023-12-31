import { useState } from 'react';

/* Cribbage Game
   Written By: Paulette
   Started: 12/30/2023 */

function PegSquare({value, onSquareClick}) {
    return (
    <button className="peg-square" title='peg square' onClick={onSquareClick}>
        {value}
    </button>);
  }

  function SubmitButton({value, onSubmitButtonClick}) {
    return (
    <button className="submit-points-button" title="submit points" onClick={onSubmitButtonClick}>
        {value}
    </button>);
  }

export default function Board() {
    const [Player1IsNext, setPlayer1IsNext] = useState(true);
    const [squares1, setPegSquares1] = useState(0);
    const [squares2, setPegSquares2] = useState(0);

    function handleSubmitButtonClick(){
        const ip = document.getElementById('point-input');
        const inputPoints = ip.value;

        //console.log("ip: ", ip);
        console.log("inputPoints: ",inputPoints);
        console.log("squares1: ",squares1);
        console.log("squares2: ", squares2);

        if (Player1IsNext === true) {
            setPegSquares1(inputPoints);
        } else {
            setPegSquares2(inputPoints);
        }


        console.log(`squares1 after setPegSquares1: ${squares1}`);
        console.log(`squares2 after setPegSquares2: ${squares2}`);

        //checks if the player has hit 4 points by calling calculateWinner(inputPoints)
        if (calculateWinner(inputPoints) === "Winner"){
            return;
        }

        

        //updates with new squares slice and assigns "X" or "O"
        //const nextPegSquares1 = squares1.slice();
        //const nextPegSquares2 = squares2.slice();

       /* if (Player1IsNext) {
            nextPegSquares1 = "X";
        } else {
            nextPegSquares2 = "O";
        }*/

        //setPegSquares1(nextPegSquares1);
        //setPegSquares2(nextPegSquares2);
        setPlayer1IsNext(!Player1IsNext);
    }

    let winner = false;

    if (Player1IsNext){
        winner = calculateWinner(squares1);
    } else {
        winner = calculateWinner(squares2);
    }
    
    console.log(winner);
    let status;
    
   /* if (winner1 | winner2) {
        status = "Winner: " + (winner1 ? "Player 1" : "Player 2");
    } else {
        status = "Next player: " + (Player1IsNext ? "Player 1" : "Player 2");
    }*/

    return (
        <>
            <div className="status">{status}</div>
            <div className="player1-board-row">
                <PegSquare value={squares1[0]} />
                <PegSquare value={squares1[1]} />
                <PegSquare value={squares1[2]} />
                <PegSquare value={squares1[3]} />
                            </div>
            <div className="player2-board-row">
                <PegSquare value={squares2[0]} />
                <PegSquare value={squares2[1]} />
                <PegSquare value={squares2[2]} />
                <PegSquare value={squares2[3]} />
            </div>
            <div className='enter-points-here'>
                <input className="points-from-input" id="point-input"placeholder='Enter your points here...'></input>
                <SubmitButton className="submit-points-button" onSubmitButtonClick={() => handleSubmitButtonClick()}/>            
            </div>
        </>
    );

    
  function calculateWinner(squares) {
    console.log(squares);

    //squares is the input points from the user
    //squares needs to be added to the current user's total points 
    //then the total points needs to be checked if it equals 120



    return "Winner";
  }
  }


