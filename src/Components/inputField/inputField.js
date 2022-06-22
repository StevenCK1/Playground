function InputField({ labelTitle, value, callFunction }) {
  return (
    <div className={`${labelTitle}-container`}>
      <label>{labelTitle}</label>
      <input value={value} type="text" onChange={callFunction}></input>
    </div>
  );
}

export default InputField;
