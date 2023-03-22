import '../css/IconSwitch.css';

export const IconSwitch = ({icon, onSwitch}) =>{
    return(
        <button className="button-switch" onClick={onSwitch}>{icon}</button>
    )
}