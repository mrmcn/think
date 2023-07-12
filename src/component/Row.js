import Square from './Square';

function Row(props) {
  const listSquare = props.squares.map((square) => (
    <Square key={square.num} num={square.num} val={square.val} handleMove={handleMove} />
  ));

  function handleMove(num) {
    props.handleChange(num);
  }

  return <div className='board-row'>{listSquare}</div>;
}

export default Row;
