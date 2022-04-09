import './Dice.css'

export default function Dice(props) {
    const diceStyle = {
        backgroundColor: props.selected ? "#59E391" : "white"
    }
   function getResult(){
    if (props.value === 1) {
        return (
            <div class="dice first-face" style={diceStyle} onClick={props.toggle}>
                <span class="dot">
                </span>
            </div>

        )
    } else if (props.value === 2) {
        return (
            <div class="dice second-face" style={diceStyle}   onClick={props.toggle}>
                <span class="dot">
                </span>
                <span class="dot">
                </span>
            </div>
        )
    } else if (props.value === 3) {
        return (
            <div class="dice third-face" style={diceStyle}   onClick={props.toggle}>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        )
    } else if (props.value === 4) {
        return (
            <div class="fourth-face dice" style={diceStyle}   onClick={props.toggle}>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
        )
    } else if (props.value === 5) {
        return (
            <div class="fifth-face dice" style={diceStyle}   onClick={props.toggle}>

                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>

                <div class="column">
                    <span class="dot"></span>
                </div>

                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>

            </div>
        )
    } else if (props.value === 6) {
        return (
            <div class="sixth-face dice" style={diceStyle}  onClick={props.toggle}>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>

            </div>
        )
    }
   }
    

   return getResult()




    /* return (
         <div class='box' style={diceStyle}  onClick={() => props.toggle(props.id)}>
             <h1>{props.value}</h1>
         </div>
     )*/
}