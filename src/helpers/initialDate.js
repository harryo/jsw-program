import { format } from 'date-fns';
import { DAYS } from './constants';

function initialDate() {
  const today = format(new Date(), 'yyyy-MM-dd');
  return DAYS.find(d => today <= d.date) || DAYS[DAYS.length - 1];
}

export default initialDate;
