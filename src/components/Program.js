import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Slot from './Slot';

function Program(props) {
  const { program } = props;
  const [open, setOpen] = useState(null);
  const toggleOpen = id => setOpen(open === id ? 0 : id);
  return (
    <ListGroup>
      {program.map(slot => (
        <ListGroup.Item key={slot.id} className="px-3">
          <Slot {...slot} open={open === slot.id} toggleOpen={toggleOpen} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

Program.propTypes = {
  program: PropTypes.array,
}

export default Program;