import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import { fetchStreams } from '../../../actions/streams';
import StreamItem from './StreamItem';
import ContentLoading from '../../Loading/ContentLoading';

class StreamList extends Component {

  componentDidMount () {
    this.props.fetchStreams();
  }

  render () {
    const { streamList, currentUserId } = this.props;
    return(
      <div>
        <Jumbotron className="bg-white">
          <div>
            <h1 className="display-3">Hello, Streamer!</h1>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.
            </p>
            <ContentLoading type={3} mode="dark" height={150}></ContentLoading>
          </div>
          <hr className="my-3"></hr>
          <div className="s-stream-list">
            { (streamList && streamList.length > 0) &&
                streamList.map(item => <StreamItem key={item.id} item={item} currentUserId={currentUserId} />)
            }
          </div>
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streamList: Object.values(state.streamsReducer),
  currentUserId: state.oauthReducer.userId
});

export default connect(mapStateToProps, { fetchStreams })(StreamList);