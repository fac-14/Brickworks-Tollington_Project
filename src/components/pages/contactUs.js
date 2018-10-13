import React from 'react';

class ContactUs extends React.Component {
  state = {
    name: null,
    email: null,
    description: null
  }
  handleChange = event => {
    // const target = event.target;
    // const value = event.target.value;
    //sets target's names value to value , target.name could be name or email or description
   // this.setState({ [target.name]: value });
   this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    fetch('/api/contactUs', {
      method: 'post',
      body: data,
    });
    this.setState({ name: null, email: null, description: null });
  }

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={this.state.input} onChange={this.handleChange}/>
      <label htmlFor="email">'Email':</label>
      <input type="text" id="email" value={this.state.input} onChange={this.handleChange}/>
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={this.state.input} onChange={this.handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

}

export default ContactUs;