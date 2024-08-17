import {Navbar} from "../Navbar/Navbar";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTask, deleteTask, toggleTask} from "../../store/Actions";
import {v4} from "uuid";
import styles from "./TodoList.module.scss";
const defaultTodoItem = {
    title: "",
    description: "",
    isCompleted: false,
    id: null
}
export function TodoList() {
    const [todoItem, setTodoItem] = useState(defaultTodoItem);

    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.tasks.tasks);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({
            ...todoItem,
            id: v4()
        }))
    }

    return (
        <div>
            <Navbar  />
            <div className={styles.TodoListContainer}>
                <h1 style={{color: "#8a61ea"}}>Todo List</h1>
                <ul>
                    {todoList?.map((task) => (
                        <li key={task.id}>
                            <div className={styles.taskContainer}>


                                <div className={styles.taskInfo}>
                                    <h3 className={task.isCompleted ? styles.isComplete : ""}>{task.title}</h3>
                                    <p className={task.isCompleted ? styles.isComplete : ""}>{task.description}</p>
                                    <p>ID: {task.id}</p>
                                </div>
                                <input onChange={() => dispatch(toggleTask(task.id))} type="checkbox"
                                       checked={task.isCompleted}/>
                                <button className={styles.btn} disabled={task.isCompleted}
                                        onClick={() => dispatch(deleteTask(task.id))}>Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <form onSubmit={onSubmit} action="">
                    <input onChange={(e) => setTodoItem({
                        ...todoItem,
                        title: e.target.value
                    })} value={todoItem.title} type="text" placeholder="Enter Title"/>
                    <textarea onChange={(e) => setTodoItem({
                        ...todoItem,
                        description: e.target.value
                    })} value={todoItem.description} name="" id="" cols="30" rows="10" placeholder="Enter Description"/>
                    <button className={styles.btn} type="submit">Add task</button>
                </form>
            </div>
        </div>
    )
}

