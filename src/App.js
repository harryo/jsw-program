import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import fetchFromWeb from './helpers/fetchProgram';
import parseHtml from './helpers/parseHtml';
import splitByDays from './helpers/splitByDays';
import DateNav from './components/DateNav'
import Program from './components/Program'
import initialDate from './helpers/initialDate';
const PROGRAM_URI = '/program.html';

function App() {
  const [program, setProgram] = useState();
  const [date, setDate] = useState(initialDate());
  console.log(date)
  useEffect(() => {
    fetchFromWeb(PROGRAM_URI).then(html => {
      const slots = parseHtml(html);
      setProgram(splitByDays(slots));
    });
  }, []);
  return (
    <div>
      <header className="px-3 pt-3">
        <h1>JS World Conference Program</h1>
      </header>
      {
        program ? (
          <>
            <DateNav date={date} setDate={setDate} />
            <h2 className="sr-only">{new Date(date.date).toLocaleDateString()}</h2>
            <Program program={program[date.id]} />
          </>
        ) :
          (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
      <footer className="px-3 py-4 smaller text-muted">
        <span> </span>
        <span>
          Developed by Harry Oosterveen, <a href="https://www.harryonline.net/">HarryOnline <img alt="HarryOnline logo" src="https://s3-eu-west-1.amazonaws.com/logos.harryonline/ho_logo_24x26.png" height="12" width="14" /></a>
        </span>
        <span>
          <a href="https://github.com/harryo/jsw-program">Source Code</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
