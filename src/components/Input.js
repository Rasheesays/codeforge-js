const Input = ({ Text, setText }) => {
  return (
    <input
      type="text"
      value={Text}
      onChange={e => {
        setText(e.target.value);
      }}
    />
  );
};

export default Input;
