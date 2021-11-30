import './countdownTimer.css';
import logo from '../img/lewagon.png';
import { useState, useEffect } from 'react';
import { getTimeLeftUntilTimestamp } from './countdownLogic';

const defaultTimeLeft = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({ countdownTimestamp }) => {

    const [timeLeft, setTimeLeft] = useState(defaultTimeLeft);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateTimeLeft(countdownTimestamp);
        }, 1000);
        return () => clearInterval(intervalId);

    }, [countdownTimestamp])

    function updateTimeLeft(countdown) {
        setTimeLeft(getTimeLeftUntilTimestamp(countdown));
    }

    return (
        <div className="container">

            <img src={logo} className="logo" alt="Logo Le Wagon" />

            <div className="title">
                <h1>Days To Le Wagon Bootcamp...</h1>
            </div>

            <div className="cdTimer">
                <span >{timeLeft.days}</span>
                <span className="time">Days</span>
                <span >{timeLeft.hours}</span>
                <span className="time">hours</span>
                <span >{timeLeft.minutes}</span>
                <span className="time">min</span>
                <span >{timeLeft.seconds}</span>
                <span className="time">seconds</span>
            </div>

            <div className="footer">
                <h3>Created by Dan Costa</h3>
            </div>

        </div>

    );
}

export default CountdownTimer;