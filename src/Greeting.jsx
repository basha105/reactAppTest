import { Component } from 'react';

class ClassInput extends Component {
    constructor(props) {
        super(props);

        this.state= {
            todos: [],
            inputVal: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        handleInputChange(e) {
            this.setState((state) => {
                inputVal: e.target.value;
            })
        }
    }

    render() {
        return (
            <section>
                <h3>Head</h3>
                <form>
                    <label htmlFor="task-entry">Enter a task: </label>
                    <input type="text" name="task-entry"/>
                    <button type="submit">Submit</button>
                </form>
                <h4>All the tasks!</h4>
                <ul></ul>
            </section>
        )
    }

}

export default ClassInput