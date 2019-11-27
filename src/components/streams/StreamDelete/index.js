import React, { Component } from 'react';
import { Button } from 'reactstrap';
import SModal from '../../Modal';

class StreamDelete extends Component {

  componentDidMount () {
    const streamId = this.props.match.params.id;
    console.log(streamId);
  }

  test = () => {
    alert('2222');
  }

  render () {
    const actions = (callbackToggle) => (
      <React.Fragment>
        <Button color="danger" onClick={this.test}>Delete</Button>{' '}
        <Button color="secondary" onClick={callbackToggle}>Cancel</Button>
      </React.Fragment>
    );

    return(
      <div className="s-stream-delete">
        Stream Delete { this.props.match.params.id }
        <SModal
          title="Delete Stream"
          content="Are you sure you want to delete this stream ?"
          actions={actions}
        />
      </div>
    );
  }
}

export default StreamDelete;
