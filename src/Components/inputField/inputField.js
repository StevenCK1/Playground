function InputField({ labelTitle, value, callFunction }) {
  function addDashSeparator() {
    return labelTitle.replace(/\s/g, "-");
  }

  const formatClass = addDashSeparator();

  return (
    <div className={`${formatClass}-container`}>
      <label>{labelTitle}:</label>
      <input value={value} type="text" onChange={callFunction}></input>
    </div>
  );
}

export default InputField;
