import React from 'react';

class Categories extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  allEvents = () => {
    this.props.history.push('/all-events');
  }

  render() {
    return (
      <div>
        <h1>Hi Harry the caterpillar</h1>
        <label htmlFor="poverty">Poverty</label>
        <input type="checkbox" name="category" value="poverty"/><br/>
        <label htmlFor="employability">Employability</label>
        <input type="checkbox" name="category" value="employability"/><br/>
        <label htmlFor="homelessness">Homelessness</label>
        <input type="checkbox" name="category" value="homelessness"/><br/>
        <label htmlFor="crime">Crime</label>
        <input type="checkbox" name="category" value="crime"/><br/>
        <label htmlFor="skills">Skills</label>
        <input type="checkbox" name="category" value="skills"/><br/>
        <button onClick={this.allEvents}>Next</button>
      </div>
    )
  }
}

export default Categories;