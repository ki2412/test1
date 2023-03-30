import {useState, useEffect} from "react" 

function App () {
    const [quotes, setQuotes] = useState ('')

    const getQuote = () => {
        fetch ("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((quotes) => {
                let randomNum = Math.floor(Math.random() * quotes.length)
                setQuotes (quotes[randomNum])
            })
    }

    useEffect(() => {
        getQuote ()
    }, [])

    return (
        <div>
            <h1>{quotes.text}</h1>
            <p>{quotes.author || '(no name)'}</p>
            <button onClick ={getQuote}>Random</button>
        </div>
    )
}

export default App