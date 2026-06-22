import React from "react";
import {useState} from "react";

function Form(props){
    function handleSubmit(event){
        event.preventDefault();
        props.addTask("Hello World!");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    Whats to be done?
                    </label>
                </h2>
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            />
            <button type="submit" className="btnbtn btn__primary btn__lg">
                Add
                </button>
        </form>
    );
}

export default Form;