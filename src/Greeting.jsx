import './App.css'

function Button(props) {
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + 'px'
    };
    return (
        <button style={buttonStyle}>{props.text}</button>
    );
}

function CreateButtons() {
    return (
        <div>
            <Button text="Ion" color="white" fontSize={18} />
            <Button text="Brent" color="green" fontSize = {19} />
            <Button text="norah" color="red" fontSize = {15} />
        </div>
    );
}

export default CreateButtons