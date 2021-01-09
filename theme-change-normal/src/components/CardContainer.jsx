import React from 'react';
import Card from './Card';

export default function CardContainer(props) {
  return (
    <div>
      <Card theme={props.theme} />
    </div>
  );
}
