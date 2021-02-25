import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Button, Collapse } from 'react-bootstrap';
import caretDown from './caret-down.svg';
import caretUp from './caret-up.svg';

function Slot(props) {
  const { id, startdate, enddate, title, open, toggleOpen, speaker, description } = props;
  const fmt = date => format(date, 'HH:mm');
  return (
    <>
      <div className="d-flex align-items-baseline">
        <div className="slot-date text-muted">{`${fmt(startdate)} – ${fmt(enddate)}`}</div>
        <h3 className="flex-grow-1">{title}</h3>
        <Button
          variant="link"
          size="sm"
          onClick={() => toggleOpen(id)}
          aria-controls={`slot-collapse-${id}`}
          aria-expanded={open}
        >
          <img src={open ? caretUp : caretDown } alt="caret"/>
        </Button>
      </div>
      <Collapse in={open}>
        <div id={`slot-collapse-${id}`} className="slot-details text-muted">
          <div className="slot-description" dangerouslySetInnerHTML={{ __html: description }} />
          <div className="slot-speaker">{speaker.join(', ')}</div>
        </div>
      </Collapse>
    </>
  )
}

Slot.propTypes = {
  id: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  title: PropTypes.string,
  open: PropTypes.bool,
  toggleOpen: PropTypes.func,
  speaker: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
}

export default Slot;
