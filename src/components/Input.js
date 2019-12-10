import React, { useState } from 'react';


const Input = (props) => {
    const [value, setValue] = useState("");

    const onInputChange = event => {
        setValue(event.target.value);
    }

    const onInputSubmit = event => {
        event.preventDefault();

        props.onFormSubmit(value);
    }

    return (
        <div>
            <form onSubmit={onInputSubmit} >
                <div>
                    <h1><label>Add New Task</label></h1>
                </div>
                <div>
                    <input onChange={onInputChange} type="text" placeholder="Add Task"></input>
                </div>
            </form>
        </div>
    );
};

export default Input;
