import React from 'react';

class Form extends React.Component {
  state = {}
  handleChange = e => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });  
      this.setState({
        [e.target.name] : e.target.value
      })
  };

  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h2>Nombre</h2>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <h2>Apellidos</h2>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}

            />
          </div>
          <div className="form-group">
            <h2>Email</h2>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <h2>Especialidad</h2>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="specialty"
              value={this.state.specialty}
            />
          </div>

          <div className="form-group">
            <h2>Twitter</h2>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;