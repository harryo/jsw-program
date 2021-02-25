import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { format } from 'date-fns';
import { DAYS } from '../helpers/constants';

function DateNav(props) {
  const { date, setDate } = props;
  const wideScreen = window.matchMedia('(min-width: 576px)').matches;
  const fmtString = wideScreen ? 'eee d' : 'eee'
  return (
    <Nav fill variant="pills" activeKey={date.id} as="ul">
      {DAYS.map(d => (
        <Nav.Item key={d.id} as="li">
          <Nav.Link eventKey={d.id} onSelect={() => setDate(d)}>
            {format(new Date(d.date), fmtString)}
          </Nav.Link>
      </Nav.Item>
      ))}
    </Nav>
  )
}

DateNav.propTypes = {
  date: PropTypes.oneOf(DAYS),
  setDate: PropTypes.func,
}

export default DateNav;