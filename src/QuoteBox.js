import React, { useEffect, useState } from "react";

const RANDOM_QUOTES_ARRAY = [
    {
        quote: "Just Do It.",
        author: "Nike",
    },
    {
        quote: "Be Water.",
        author: "Bruce Lee",
    },
    {
        quote: "Life is like a box of chocolates. You never know what you are gonna get.",
        author: "Forrest Gump",
    },
    {
        quote: "One small step for man, one giant leap for mankind.",
        author: "Neil Armstrong",
    },
];

function QuoteBox() {
    const [quote, setQuote] = useState("Some Quote");
    const [author, setAuthor] = useState("Some Author");

    // Initialize
    useEffect(() => {
        GenerateRandomQuote();
    }, []);

    const GenerateRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * RANDOM_QUOTES_ARRAY.length);

        setQuote(RANDOM_QUOTES_ARRAY[randomIndex].quote);
        setAuthor(RANDOM_QUOTES_ARRAY[randomIndex].author);
    };

    return <div id='quote-box'>
        <p id='text'>{quote}</p>
        <p id='author'>{author}</p>
        <button id='new-quote' onClick={GenerateRandomQuote}>New Quote</button>
        <a id='tweet-quote' href='https://twitter.com/intent/tweet'>
            <img alt="Tweet Quote" src='./twitter.svg'></img>
        </a>
    </div>;
}

export default QuoteBox;