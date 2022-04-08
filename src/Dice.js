import './Dice.css'

export default function Dice(props){
    const diceStyle = {
       backgroundColor : props.selected ? "#59E391" : "white"
       
    }
    return (
        <div class='box' style={diceStyle}  onClick={() => props.toggle(props.id)}>
            <h1>{props.value}</h1>
        </div>
    )
}