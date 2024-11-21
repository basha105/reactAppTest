function ListItem(props) {
    return <li>{props.animal}</li>
}

function List(props) {
    return (
        <ul>
            {props.animalList.map((animal) => {
                return <ListItem key={animal} animal={animal} />;
            })}

        </ul>
    )
}

export default function AnimalDisplay() {
    const animals = ["Lion", "CHEESE", "Snake", "Lizard", "Giraffe", "Dog", "Shark", "Whale", "Cat"];

    return (
        <div>
            <h1>Animals: </h1>
            <List animalList={animals} />
        </div>
    );   
}