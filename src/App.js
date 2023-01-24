import React from 'react';

function Clock(props) {
    return (
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
    );
}

function CountingButton() {
    const count = 0;
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => alert("The button was clicked.")}>
                Click me
            </button>
        </div>
    );
}

function App() {
    return (
        <div>
            <CountingButton />
        </div>
    );
}

export default App;
