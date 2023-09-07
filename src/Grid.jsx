import { range } from './utils';

function Grid({ numRows, numCols }) {
  const row = range(numRows).map((rows) => (
    <div key={rows} className="row">
      {range(numCols).map((col) => (
        <div key={col} className="cell"></div>
      ))}
    </div>
  ));


  return <div className="grid">{row}</div>;
}

export default Grid;
