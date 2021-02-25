import { parse } from 'node-html-parser';

function parseSlot(elem) {
  const prose = elem.querySelector('div.prose');
  return {
    id: elem.firstChild.getAttribute('id'),
    startdate: new Date(elem.getAttribute('startdate')),
    enddate: new Date(elem.getAttribute('enddate')),
    title: elem.querySelector('h1').textContent.trim(),
    description: prose.lastChild.innerHTML?.replace(/ style="[^"]*"/g, ''),
    speaker: prose.nextElementSibling?.querySelectorAll('span').map(e => e.textContent.trim()),
  }
}

function parseHtml(html) {
  const root = parse(html);
  return root.querySelectorAll('div[startdate]').map(parseSlot);
}

export default parseHtml;
