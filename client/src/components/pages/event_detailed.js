import React from 'react';


class EventDetailed extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      event : [],
    }
  }

  componentDidMount() {
console.log('ID IS',this.props.location.pathname);
  }

  render() {
console.log('Detailed event'); console.log(this.state.event);
    return (
      <div className='wrapper'>
        <h1>Event</h1>
        <main>

        </main>

      </div>
    )
  }

}
export default EventDetailed;