import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../Filter";
import Task from "./Task";

const TaskList = () => {
  const [text, setText] = useState('all')
  const filtertext = (text) => {
    setText(text)
}
  
  
  const tasks = useSelector((state) => state.counterReducer.todos);
 
  return (
    <div>
      tasklist:
      <Filter filtertext={filtertext}/>
      {text == 'all'
          ? tasks.map((el) => <Task el={el}  />)
          : (text == 'done')
          ? tasks.filter((el) => el.check == true).map((el) => (
              <Task el={el} />
            ))
          : tasks.filter((el) => !el.check).map((el) => (
              <Task el={el}  />
            ))}
    </div>
  );
};
export default TaskList;