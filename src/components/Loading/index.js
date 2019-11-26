import React from 'react';
import { Spinner } from 'reactstrap';
import './style.css';

const Loading = ({ pos = 'center', type, color, size, cssModule }) => {
  const klass = `s-loading is-${pos}`;
  return(
    <div className={klass}>
      <Spinner type={type} color={color} size={size} cssModule={cssModule} />
    </div>
  );
}

export default Loading;