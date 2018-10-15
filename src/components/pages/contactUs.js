import React from 'react';

class ContactUs extends React.Component {
  state = {
    name: '',
    email: '',
    description: ''
  }
  handleChange = event => {
    //   const target = event.target;
    //   const value = event.target.value;
    //   //sets target's names value to value , target.name could be name or email or description
    //  this.setState({ [target.name]: value });

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('CONTACT US MA')
    console.log(this.state)
    const data = JSON.stringify(this.state);
    console.log('data', data)
    fetch('/api/contactUs', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: data,
    })
      .then(res => console.log(res))
      .catch(err => {
        console.log('ERROR IS', err);
        throw new Error(`fetch /api/contactUs failed ${err}`);
      });
    this.setState({ name: '', email: '', description: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="email">'Email':</label>
        <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }

}

export default ContactUs;