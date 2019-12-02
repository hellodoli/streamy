import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Button } from 'reactstrap';
import SModal from '../../Modal';

import history from '../../../history';

import { fetchStream, deleteStream } from '../../../actions/streams';

class StreamDelete extends Component {

  componentDidMount () {
    this.props.fetchStream(this.props.match.params.id);
  }

  closedModal = () => {
    history.push('/');
  }

  deleteStream = () => {
    this.props.deleteStream(this.props.match.params.id);
  }

  /* Action Buttons */
  renderActions = (callbackToggle) => {
    return(
      <React.Fragment>
        <Button color="danger" onClick={this.deleteStream}>Delete</Button>{' '}
        <Button color="secondary" onClick={callbackToggle}>Cancel</Button>
      </React.Fragment>
    );
  }

  render () {
    return(
      <div className="s-stream-delete">
        <SModal
          title="Delete Stream"
          content="Are you sure you want to delete this stream ?"
          actions={this.renderActions}
          closedModal={this.closedModal}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streamsReducer[ownProps.match.params.id]
});

export default connect(mapStateToProps , { fetchStream, deleteStream })(StreamDelete);
