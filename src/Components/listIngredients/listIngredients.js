function ListIngredients({ arr, callFunction }) {
  function clickUndefined() {
    if (callFunction === undefined) {
      return (
        <div className="list-ingredients-container">
          {arr.map((item, index) => {
            return (
              <div>
                <p>{`${item.measurement} ${item.unit} ${item.name}`}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="list-ingredients-container">
          {arr.map((item, index) => {
            return (
              <div onClick={() => callFunction(index)}>
                <p>{`${item.measurement} ${item.unit} ${item.name}`}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }

  return clickUndefined();
}
export default ListIngredients;
