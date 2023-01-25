import React, { useState, useEffect } from 'react';

function Clock(props) {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const timerId = setInterval(() => setDate(new Date()), 1000)
        return () => clearInterval(timerId)
    }, [])

    return (
        <h2>It is {date.toLocaleTimeString()}.</h2>
    );
}

function CountingButton() {
    // const count = 0;
    const [count, setCount] = useState(0)
    // const [pets, setPets] = useState({ cats: 2, fish: 3 })
    // setPets({ fish: 2 })
    const [cats, setCats] = useState(2)
    const [fish, setFish] = useState(3)
    const [dogs, setDogs] = useState(3)

    useEffect(() => {
        document.title = `${count} clicks`
    }, [ count ])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Click me
            </button>
        </div>
    );
}

function App() {
    return (
        <div>
            <CountingButton />
            <Clock />
        </div>
    );
}

export default App
