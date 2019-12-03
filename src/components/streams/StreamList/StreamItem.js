import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

import { Link } from 'react-router-dom';

function renderButtonMeta (currentUserId, stream) {
  if (currentUserId === stream.userId) {
    return <ButtonMetaGroup id={stream.id} />;
  }
  return null;
}

const ButtonMetaGroup = ({ id }) => {
  return(
    <div className="s-stream-item__meta text-right">
      <Button tag={Link} to={`/streams/edit/${id}`} color="warning">Edit</Button>{' '}
      <Button tag={Link} to={`/streams/delete/${id}`} color="danger">Delete</Button>
    </div>
  );
}

export default ({ item , currentUserId }) => {
  return(
    <div className="s-stream-item" style={{ marginBottom: '15px' }}>
      <Card className="bg-dark text-white">
        <CardBody>
          <CardTitle>
            <Link to={`/streams/${item.id}`}>{ item.title }</Link>
          </CardTitle>
          <CardText>{ item.description }</CardText>
          { renderButtonMeta(currentUserId, item) }
        </CardBody>
      </Card>
    </div>
  );
}
