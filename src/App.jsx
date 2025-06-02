import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const targetDate = new Date('2026-08-01T00:00:00');
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft('Bryllupsdagen er her!');
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft(`${days} dager, ${hours} timer, ${minutes} minutter, ${seconds} sekunder`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Velkommen til vårt bryllup!</h1>
            <p>Vi gleder oss til å feire med dere.</p>
            <h2>Nedtelling til bryllupet:</h2>
            <p>{timeLeft}</p>
        </div>
    );
}

export default App;
