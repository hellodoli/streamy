import React, { Component } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';

import { fetchStream } from '../../../actions/streams';

import Loading from '../../Loading';


class StreamShow extends Component {

  constructor () {
    super();
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }

  renderStreamDetail = () => {
    const { stream } = this.props;
    if (stream && stream.id) {
      return(
        <div>
          <video
            ref={this.videoRef}
            style={{ width: '100%' }}
            controls
          />
          <h4>Stream ID: { stream.id }</h4>
        </div>
      );
    }
    return <Loading />
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render () {
    return(
      <div className="s-stream-detail">
        { this.renderStreamDetail() }
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => ({
  stream: state.streamsReducer[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);