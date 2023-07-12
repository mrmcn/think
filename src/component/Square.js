function Square(props) {
  function handleClick() {
    if (props.val === null) {
      props.handleMove(props.num);
    } else {
      alert('Oops!');
    }
  }

  return (
    <button className='square' value={props.val} num={props.num} onClick={handleClick}>
      {props.val}
    </button>
  );
}

export default Square;
