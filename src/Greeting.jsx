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
            <Button />
            <Button />
            <Button />
        </div>
    );
}

export default CreateButtons