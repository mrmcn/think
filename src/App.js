import { useState } from 'react';
import Row from './component/Row';

const DATA = [
  {
    squares: [
      { num: '0', val: null },
      { num: '1', val: null },
      { num: '2', val: null },
    ],
  },

  {
    squares: [
      { num: '3', val: null },
      { num: '4', val: null },
      { num: '5', val: null },
    ],
  },

  {
    squares: [
      { num: '6', val: null },
      { num: '7', val: null },
      { num: '8', val: null },
    ],
  },
];

function App() {
  const [rows, setRows] = useState(DATA);
  const [xIsNext, setXisNext] = useState(true);
  const listRow = rows.map((row) => (
    <Row key={row.num} num={row.num} val={row.val} handleChange={handleChange} squares={row.squares} />
  ));

  function handleChange(num) {
    const nextRows = rows.slice().map((rows) => {
      if (num === rows.num) {
        if (xIsNext) {
          return { ...rows, val: 'X' };
        } else return { ...rows, val: 'O' };
      } else return rows;
    });
    setXisNext(!xIsNext);
    setRows(nextRows);
  }

  return <>{listRow}</>;
}

export default App;
