import React from 'react';

class ContactUs extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    description: '',
    cntWithCommunityAdviser: false,
    trainCommunityAdviser: false,
    // startSocialAction: true
  }

  handleChange = event => {
    // this.setState({ [event.target.name]: event.target.value });
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('CONTACT US MA')
    console.log(this.state)
    const data = JSON.stringify({
      startSocialAction: this.state
    });
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
    this.setState({ name: '', email: '', description: '', number: '' });
  }

  render() {
    return (
    <div className='wrapper'>
    <h1>Register an interest to a social action</h1>
    <main>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <label htmlFor="phone">Contact number:</label>
        <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
        <label htmlFor="description">Description of social action:</label>
        <textarea name="description" cols="40" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>
        {/* <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} /> */}
        <h3>Please check the options applicable to you</h3>
        <label htmlFor="cntWithCommunityAdviser">I want to connect with a local Community Organiser</label>
        <input className='checkbox'
          type="checkbox"
          id="cntWithCommunityAdviser"
          name="cntWithCommunityAdviser"
          checked={this.state.cntWithCommunityAdviser}
          onChange={this.handleChange}
        />

        <label htmlFor="trainCommunityAdviser">I am interested in Community Organisers training</label>
        <input className='checkbox'
          type="checkbox"
          id="trainCommunityAdviser"
          name="trainCommunityAdviser"
          checked={this.state.trainCommunityAdviser}
          onChange={this.handleChange}
        />
        
        <button className='form-button-two' type="submit">Submit</button>
      </form>
    </main>
    </div>
    );
  }
}

export default ContactUs;