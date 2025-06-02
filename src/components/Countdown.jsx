// Countdown.jsx
import React from 'react';
import Countdown from 'react-countdown';

const WeddingCountdown = () => {
    const weddingDate = new Date('2026-08-01T00:00:00');

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <h2 className="countdown-message">💍 Bryllupsdagen er her! 💐</h2>;
        } else {
            return (
                <div className="countdown-wrapper">
                    <div className="countdown-boxes">
                        <div className="box"><span>{days}</span><p>Dager</p></div>
                        <div className="box"><span>{hours}</span><p>Timer</p></div>
                        <div className="box"><span>{minutes}</span><p>Minutter</p></div>
                    </div>
                </div>
            );
        }
    };

    return <Countdown date={weddingDate} renderer={renderer} />;
};

export default WeddingCountdown;
