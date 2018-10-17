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
        this.props.history.push('/500error');
      });
      
    this.setState({ name: '', email: '', phone: '', description: '', cntWithCommunityAdviser: false,
    trainCommunityAdviser: false, formErrors: {name:'', email: '', description: ''}, nameValid: false,emailValid: false, descriptionValid: false, formValid: false });
    
  }

  render() {
    return (
    <div className='wrapper'>
    <h1>Register an interest to start a social action</h1>
    <h3> Please note name, email and Description are required fields </h3>
    <main>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
        <label htmlFor="description">Description of social action:</label>
        <textarea name="description" id="description" cols="40" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>
        {/* <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} /> */}
        <h3>Please click on the options that apply</h3>

        <div className="choices">
          <span className="choices-text">Would you like to connect with a local Community Organiser?</span>
          <label className="label-checkbox" htmlFor="cntWithCommunityAdviser">
              <input
                type="checkbox"
                id="cntWithCommunityAdviser"
                name="cntWithCommunityAdviser"
                checked={this.state.cntWithCommunityAdviser}
                onChange={this.handleChange}
              />
              <button className="custom-checkbox">Yes</button>
            </label>
            </div>

      <div className="choices">
        <span className="choices-text">Would you like to train as a Community Organiser?
        </span>
          <label className="label-checkbox" htmlFor="trainCommunityAdviser">
            <input
              type="checkbox"
              id="trainCommunityAdviser"
              name="trainCommunityAdviser"
              checked={this.state.trainCommunityAdviser}
              onChange={this.handleChange}
            />
            <button className="custom-checkbox">Yes</button>
          </label>
       </div>
        
       <button id="form-button" class="button-large" type="submit">Submit</button>
      </form>
    </main>
    </div>
    );
  }
}

export default ContactUs;
