import './App.css'

function Button({text = "Click me", color = "blue", fontSize = 12 }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };
    return <button style={buttonStyle}>{text}</button>;
}

function CreateButtons() {
    return (
        <div>
            <Button text="Ion" fontSize = "18"/>
            <Button text="Brent" color = "green" fontSize ="18" />
            <Button text="norah" color = "pink" fontSize = "18"/>
        </div>
    );
}

export default CreateButtons