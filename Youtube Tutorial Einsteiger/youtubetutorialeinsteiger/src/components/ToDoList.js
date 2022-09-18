import React from 'react';
import ToDo from './ToDo';
import { useState, useEffect } from 'react';

const ToDoList = () => {

    const [openCount, CountOpenToDos] = useState(0);
    const [toDos, setToDos] = useState(() => {
        const items = localStorage.getItem("items");
        const parsed = JSON.parse(items);
        return parsed || [];
    });
    const [textInput, setTextInput] = useState("");

    const changeText = (e) => {
        setTextInput(e.target.value);        
    };

    const submit = (e) => {
        e.preventDefault();

        const newToDos = [...toDos, {description : textInput, done : false}];
        setToDos(newToDos);
        setTextInput("");
    };

    const countOpen = () => {
        const doneToDos = toDos.filter((item) => {
            return !item.done;
        });
        CountOpenToDos(doneToDos.length);
    };

    const changeToDo = (index) => {
        const newToDos = [...toDos]; // nie direkt den State ändern. So erhält man eine kopie davon. Der kann wiederum geändert werden
        if (newToDos[index].done)
            newToDos[index].done = false;
        else
            newToDos[index].done = true;

        setToDos(newToDos);
    };

    const deleteToDo = (index) => {
        const newToDos = [...toDos];
        newToDos.splice(index, 1);
        setToDos(newToDos);
    };

    useEffect(() => {
        countOpen();
        localStorage.setItem("items", JSON.stringify(toDos));
    }, [toDos]);

    return (
        <div className="shadow-sm hover:shadow-lg border">
            <div className="text-center bg-gray-900 text-white py-4 font-semibold">
                <h1 className='text-3xl'>Unsere ToDo's</h1>
                <h2>Offene ToDo's: {openCount}</h2>
                <form className='grid grid-cols-3 py-2'>
                    <input
                        onChange={changeText}
                        type="text"
                        value={textInput}
                        placeholder='Neues ToDo...'
                        className='col-span-2 py-2 text-gray-900 text-center'
                    ></input>
                    <input
                    onClick={submit}
                        type="submit"
                        value="Add ToDo"
                        className='col-span-1 text-gray-900 bg-gray-100 cursor-pointer'
                    ></input>
                </form>
            </div>

            {toDos.map((item, index) => {
                return (
                    <ToDo
                        description={item.description}
                        done={item.done}
                        key={index}
                        index={index}
                        onChangeToDo={changeToDo}
                        onDeleteToDo={deleteToDo}
                    ></ToDo>
                );
            })}
        </div>
    )
}

export default ToDoList