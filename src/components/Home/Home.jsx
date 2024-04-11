import { List } from "../List/List"
import './Home.css'
import bgDeskTopLight from "../../../images/bg-desktop-light.jpg"

export const Home =  () => {
    return <>
    <div className='lightHome'>
            <h1>T O D O</h1>
            <img className="lightModeImg" src={bgDeskTopLight}/>
            <div className='toDoListAndCreate'>
            <List/>
            </div>
        </div>
    </>
}