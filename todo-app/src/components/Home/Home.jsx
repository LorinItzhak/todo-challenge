import './Home.css'
import {TodoList} from '../TodoList/TodoList'

export const Home = () => {
    return (
        <div className="home-wrap">
            <h1>T O D O </h1>
            <TodoList />
        </div>
    );
};