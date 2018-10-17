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
    <h1 className='pageHeadings'>Register your interest in a social action</h1>
    <div className='sidebar'></div>
    <main>
      <form id='main-form' onSubmit={this.handleSubmit}>
        <label className="form-label" htmlFor="name">Name</label>
        <input type="text" className="form-input" id="name"  name="name" value={this.state.name} onChange={this.handleChange} />
        <label className="form-label"  htmlFor="email">Email</label>
        <input type="text" className="form-input" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <label className="form-label"  htmlFor="phone">Contact number</label>
        <input type="text" className="form-input" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
        <label className="form-label" htmlFor="description">Description of social action</label>
        <textarea name="form-description" id="form-description" cols="40" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>
        {/* <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} /> */}
        <h3 id="form-h3">Please click on the options that apply</h3>

        <div className="choices">
          <span className="choices-text">I want to connect with a local Community Organiser</span>
          <label className="label-checkbox" htmlFor="cntWithCommunityAdviser">
              <input
                type="checkbox"
                id="cntWithCommunityAdviser"
                name="cntWithCommunityAdviser"
                checked={this.state.cntWithCommunityAdviser}
                onChange={this.handleChange}
              />
              <button className="custom-checkbox"></button>
            </label>
            </div>

      <div className="choices">
        <span className="choices-text">I want to train as a Community Organiser
        </span>
          <label className="label-checkbox" htmlFor="trainCommunityAdviser">
            <input
              type="checkbox"
              id="trainCommunityAdviser"
              name="trainCommunityAdviser"
              checked={this.state.trainCommunityAdviser}
              onChange={this.handleChange}
            />
            <button className="custom-checkbox"></button>
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