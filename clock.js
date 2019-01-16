export class Timer {

    get hour() {
        return this._hour < 10 ? "0" + this._hour : this._hour;
    }

    get minute() {
        return this._min < 10 ? "0" + this._min : this._min;
    }

    get second() {
        return this._sec < 10 ? "0" + this._sec : this._sec;
    }

    /**
     * Creates an instance of Timer.
     * @param {{onClockTicked:function} [config={}] 
     * 
     * @memberOf Timer
     */
    constructor(config = {}) {
        this._sec = 0;
        this._min = 0;
        this._hour = 0;
        this._config = config;
    }

    start() {
        if (!this.interval)
            this.interval = setInterval(() => this._clockTick(), 1000)
    }


    close() {
        clearInterval(this.interval);
    }

    _clockTick() {
        this._sec++;
        if (this._sec == 60) {
            this._min++;
            this._sec = 0;
        }
        if (this._min == 60) {
            this._hour++;
            this._min = 0;
        }
        if (this._config.onClockTicked)
            this._config.onClockTicked();
    }
}

