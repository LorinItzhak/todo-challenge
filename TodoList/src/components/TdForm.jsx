import { useState } from "react" 

export const TdForm = ({addTask}) => {
    const [value, setValue]=useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTask({text:value, completed:false})

        setValue("")
    }
    return <>
    <form onSubmit={handleSubmit}>
        <div className="mainRow">
        <h1 className="header">TODO</h1>
        <img className="moon" src="images/icon-moon.svg" alt=""></img>
        </div>
        <input className="TdInput" type="text" value={value} placeholder="Creat a new todo..." onChange={(e)=> setValue(e.target.value)} ></input>
    </form>
    </>
    
}