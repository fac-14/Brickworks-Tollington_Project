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
    <h1>Register An Interest To A Social Action</h1>
    <main>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <label htmlFor="phone">Contact Number:</label>
        <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
        <label htmlFor="description">Description Of Social Action:</label>
        <textarea name="description" cols="40" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>
        {/* <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} /> */}
        <h4>Please check the options applicable to you</h4>
        <div className='checkbox-div'>
        <input className='checkbox'
          type="checkbox"
          id="cntWithCommunityAdviser"
          name="cntWithCommunityAdviser"
          checked={this.state.cntWithCommunityAdviser}
          onChange={this.handleChange}
        />
        <label htmlFor="cntWithCommunityAdviser">I want to connect with a local Community Organiser</label>

        <input className='checkbox'
          type="checkbox"
          id="trainCommunityAdviser"
          name="trainCommunityAdviser"
          checked={this.state.trainCommunityAdviser}
          onChange={this.handleChange}
        />
        <label htmlFor="trainCommunityAdviser">I am interested in Community Organisers training</label>
        </div>
        
        <button className='button-large' type="submit">Submit</button>
      </form>
    </main>
    </div>
    );
  }
}

export default ContactUs;