import React, { useState, useContext, useRef } from "react";

import { AppContext } from "../context/AppContext";

function ExpenseItem(props) {
  //need to import props
  const { dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const itemNameRef = useRef(null);
  const itemCostRef = useRef(null);

  const handleSubmit = () => {
    dispatch({
      type: "UPDATE_EXPENSE",
      payload: {
        id: props.id,
        name: itemNameRef.current.value,
        cost: parseInt(itemCostRef.current.value),
      },
    });
    setIsEditing(false);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        {isEditing ? (
          <>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save
            </button>
            <input
              id="item"
              defaultValue={props.name}
              ref={itemNameRef}
            ></input>
            <input
              type="number"
              id="cost"
              defaultValue={props.cost}
              ref={itemCostRef}
            ></input>
          </>
        ) : (
          <>
            <span className="badge badge-primary badge-pill mr-3">
              $ {props.cost}
            </span>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDeleteExpense}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default ExpenseItem;
