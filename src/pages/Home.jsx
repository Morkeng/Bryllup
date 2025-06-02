
import React, {useEffect, useState} from 'react';

function Home() {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const targetDate = new Date('2026-08-01T00:00:00'); // Updated to 2026
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
            <h1>Hjem</h1>
            <p>Velkommen til vår bryllupsnettside!</p>
            <p>{timeLeft}</p>
        </div>
    );
}

export default Home;