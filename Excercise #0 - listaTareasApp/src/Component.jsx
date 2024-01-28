import React, { useState } from 'react';

export default function ListaTareasApp() {

    /* tasks: Representa la lista de tareas y se inicializa como un array vacío. */
    const [tasks, setTasks] = useState([]);

    /* newTask: Representa el valor del campo de entrada para la nueva tarea y se inicializa como una cadena vacía. */
    const [newTask, setNewTask] = useState('');

    const addTask = () => {

        /* Verifica que la tarea no es una cadena vacía y que no es igual a otra*/
        if (newTask.trim() !== '' && !tasks.some(task => task.name === newTask.trim())) {

            /* Se crea un nuevo objeto de tarea (newTaskObject) con dos propiedades: 
            name, que toma el valor del estado newTask (el nombre de la nueva tarea 
            ingresado por el usuario), y completed, que se establece inicialmente 
            en false porque la tarea recién creada aún no está completada. */
            const newTaskObject = { name: newTask, completed: false };

            /* Se crea un nuevo array que contiene todos los elementos actuales de tasks, seguido del nuevo objeto de tarea (newTaskObject). */
            setTasks([...tasks, newTaskObject]);

            /* Se restablece a cadena vacía el estado de newTask */
            setNewTask('');
        }
    };

    const toggleTaskStatus = (index) => {

        /* Se crea una copia del array de tareas */
        const updatedTasks = [...tasks];

        /* Actualiza el estado de una tarea específica en el array de tareas y
        además le cambia su propiedad 'completed' */
        updatedTasks[index] = { ...updatedTasks[index], completed: !updatedTasks[index].completed };

        // Actualiza el estado con el nuevo array de tareas
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {

        // Elimina la tarea en la posición 'index' del array 'tasks'
        const updatedTasks = [...tasks];

        // Se utiliza splice para eliminar la tarea en la posición 'index'
        updatedTasks.splice(index, 1);

        // Actualiza el estado con el nuevo array de tareas
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button onClick={addTask}>Agregar Tarea</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.name}
                        <button onClick={() => toggleTaskStatus(index)}>
                            {task.completed ? 'Desmarcar' : 'Completar'}
                        </button>
                        <button onClick={() => deleteTask(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
