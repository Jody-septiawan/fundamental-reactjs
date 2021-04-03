import { useState } from 'react';
import List from '../Components/List';

function Content(props) {

    const [count, setCount] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        setCount(count + 1);
    }


    return (
        <div className="App-content" >
            {props.title} <br />

            {count}

            <button onClick={handleClick}>Click me</button>
            <List />
        </div>
    )
}

export default Content;
