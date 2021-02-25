import { DAYS } from "./constants";

function splitByDays(slots) {
  let section = slots;
  const result = {};
  DAYS.forEach(d => {
    if (d.id === 'd-5') {
      result[d.id] = section;
      return;
    }
    const end = section.findIndex(s => !s.id.startsWith(d.id));
    result[d.id] = section.slice(0, end);
    section = section.slice(end);
  })
  return result;
}

export default splitByDays;
