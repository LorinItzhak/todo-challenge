export const Input = ({setNewTodo,todos})=>{

    return<>
    <input onKeyDown={(e) =>{ 
    if(e.key=='Enter'){
        todos.list.push(e.target.value)
        setNewTodo({...todos, list : todos.list })
        e.target.value=''
    }}

} className='text-input'  placeholder="Create a new TODO..."></input>
        </>
}
export default Input;