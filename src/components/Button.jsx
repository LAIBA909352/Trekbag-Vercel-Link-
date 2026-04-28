export default function Button({ text, onClick, buttonType }) {
  return (
    <button className={`btn ${buttonType}`} onClick={onClick}>
      {text}
    </button>
  );
}