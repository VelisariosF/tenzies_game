import './App.css';
import React from 'react'
import Dice from './Dice'


export default function App() {
  
  console.log("component rendered")
  const [dices, setDices] = React.useState(allNewDice())
  const [buttonState, setButtonState] = React.useState(false)
  const diceElements = dices.map(dice => (
    <Dice
      key={dice.id}
      id={dice.id}
      value={dice.value}
      selected={dice.selected}
      toggle={() => toggle(dice.id)}
    />
  ))


  React.useEffect(function () {
    checkIfGameEnd()
  }, [dices])

  
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {

      console.log(i)
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1,
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
          value: Math.floor(Math.random() * 6) + 1,
          selected: false,
          id: i,

        })
      }



    }
    return newDice
  }

  function rollDice() {
    if (dices.length === 0 || buttonState) {
      setButtonState(false)
      setDices(allNewDice())


    } else {
      setDices(allNewDicesNotSelected())
    }

  }

  function checkAllIfSame() {
    let num = dices[0].value;
    for (let i = 0; i < dices.length; i++) {
      if (dices[i].value !== num) {
        return false
      }
    }
    return true
  }

  function checkIfAllSelected() {
    for (let i = 0; i < dices.length; i++) {
      if (!dices[i].selected) {
        return false
      }
    }
    return true
  }

  function checkIfGameEnd() {

    if (checkIfAllSelected()) {
      if (checkAllIfSame()) {

        setButtonState(true)


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
        {buttonState ? <h1 className='win_msg'>You Won!</h1> : diceElements}

      </div>

      <button onClick={rollDice}>{buttonState ? "New Game" : "Roll"}</button>
    </main>
  );
}


