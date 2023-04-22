function Box(props) {
  return (
    <div onClick={props.handle_click}>
      <h1>
        Tôi là {props.name} va tuổi là {props.old}
      </h1>
    </div>
  );
}
export default Box;
