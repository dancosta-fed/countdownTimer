import './countdownTimer.css'

const CountdownTimer = () => {
    return (
        <div>
            <div class="title">
                <h1>Days To Le Wagon Bootcamp...</h1>
            </div>

            <div class="cdTimer">
                <span >67</span>
                <span class="time">Days</span>
                <span >23</span>
                <span class="time">hours</span>
                <span >37</span>
                <span class="time">min</span>
                <span >14</span>
                <span class="time">seconds</span>
            </div>

        </div>

    );
}

export default CountdownTimer;