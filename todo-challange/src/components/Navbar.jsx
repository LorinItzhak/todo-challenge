import {ALL,ACTIVE,COMPLETED} from '../mock';
const CLEAR_COMPLETED = "Clear Completed";
const itemsString = amount => `${amount} items left`;
const Navbar = ({filterHandler,clearHandler,counter}) =>
    <div className="navbar">
        <div className="remaining">{itemsString(counter)}</div>
        <div className="filters">
            <button onClick={()=>filterHandler(ALL)}>{ALL}</button>
            <button onClick={()=>filterHandler(ACTIVE)}>{ACTIVE}</button>
            <button onClick={()=>filterHandler(COMPLETED)}>{COMPLETED}</button>
        </div>
        <div>
            <button onClick={clearHandler}>{CLEAR_COMPLETED}</button>
        </div>
    </div>;

export default Navbar;