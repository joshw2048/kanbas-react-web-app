import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { useSelector } from "react-redux";
import { LabState } from "../store";

function sayHello() {
    alert("Hello");
}

const Assignment4 = () => {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return(
    <>
      <h1>Assignment 4</h1>
      < PassingFunctions theFunction={sayHello} />
      < ClickEvent />
      < PassingDataOnEvent />
      < EventObject />
      < BooleanStateVariables />
      < StringStateVariables />
      < DateStateVariable />
      < ObjectStateVariable />
      < ArrayStateVariable />
      < ParentStateComponent />
      < ReduxExamples />
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

    </>
  );
};
export default Assignment4;