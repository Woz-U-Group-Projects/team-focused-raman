import React from "react";
import axios from "axios";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.taskName = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let url = "http://localhost:8080/tasks";
    axios.get(url).then(response => this.setState({ projects: response.data }));
  };

  addTask = () => {
    let url = "http://localhost:8080/tasks";
    axios.post(url, { name: this.taskName.current.value }).then(response => {
      this.getData();
      this.taskName.current.value = "";
    });
  };

  render() {
    return (
      <div>
        <h3>List of tasks</h3>
        <input ref={this.taskName} />
        <button onClick={this.addTask}>add</button>
        <ul>
          {this.state.projects.map(p => (
            <li key={p.id}>
              {p.id} : {p.name} : {p.complete ? "complete" : "not complete"}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Project;
