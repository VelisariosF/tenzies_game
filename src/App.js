import logo from './logo.svg';
import './App.css';
import React from 'react'
import Dice from './Dice'
import data from './data'

function App() {
  let msg ="Tenzies"
  const [dices, setDices] = React.useState(allNewDice())
  const [buttonState, setButtonState] = React.useState('Roll')
  const diceElements = dices.map(dice => (
    <Dice
      key={dice.id}
      id={dice.id}
      value={dice.value}
      selected={dice.selected}
      toggle={() => toggle(dice.id)}
    />
  ))

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {


      newDice.push({
        value: Math.floor(Math.random() * 6),
        selected: false,
        id: i,

      })



    }
    return newDice
  }


  function allNewDicesNotSelected() {
    const newDice = []
    for (let i = 0; i < 10; i++) {

      if (dices[i].selected) {
        newDice.push(dices[i])
      } else {
        newDice.push({
          value: Math.floor(Math.random() * 6),
          selected: false,
          id: i,

        })
      }



    }
    return newDice
  }


  function rollDice() {
    if (dices.length === 0 || checkIfGameEnd())
      setDices(allNewDice())
    else
      setDices(allNewDicesNotSelected())
  }

  function checkAllIfSame() {
     let num = dices[0].value;
     for(let i = 0; i < dices.length; i++){
       if(dices[i].value != num){
         return false
       }
     }
     return true
  }

  function checkIfAllSelected() {
     for(let i = 0; i < dices.length; i++){
       if(!dices[i].selected){
         return false
       }
     }
     return true
  }

  function checkIfGameEnd() {
    if (checkIfAllSelected()) {
      if (checkAllIfSame()) {
        setButtonState(prevButtonState => "roll again")
        return true
      }
    }
    return false
  }


  function toggle(id) {
    
    setDices(prevDices => prevDices.map(dice => {
  
      return dice.id === id ?
        { ...dice, selected: !dice.selected } :
        dice
    })
    )
   
  }





  return (
    <main>
      <h1 className='title'>Tenzies</h1>
      <h2 className='subtitle'>Roll untill all dice are same. Click each dice to freeze
        it at its current value between rolls.</h2>
      <div className='border'>
        {diceElements}
      </div>

      <button onClick={rollDice}>{buttonState}</button>
    </main>
  );
}

export default App;
