import './App.css'

function Button(props) {
  const buttonStyle = {
      color: props.color,
      fontSize: props.fontSize + 'px'
  };
  return (
    <button style={buttonStyle}>{props.text}</button>
  )
  
}

function App() {
  return (
    <div>
        <Button text="Ion" color="blue" fontSize={12}></Button>
        <Button text="Brent" color="green" fontSize={14}></Button>
        <Button text="norah" color="red" fontSize={11}></Button>
    </div>
);
  
}

export default App
