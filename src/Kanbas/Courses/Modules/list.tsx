import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer"
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="my-2">
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }/>
        </div>
        <div className="mb-1">
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
        </div>
        <div className="d-flex flex-row">
          <div className="me-2">
            <button type="button" className="btn btn-success"
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
          </div>
          <div>
            <button className="btn btn-outline-success"
              onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
          </div>
        </div>
      </li>
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
            <div className="mb-3">
              <button className="btn btn-outline-dark me-2"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button className="btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
            </div>
            <p>{module.description}</p>
            <p>{module._id}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;

