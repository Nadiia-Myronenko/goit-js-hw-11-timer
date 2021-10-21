const refs = {
    daysField: document.querySelector('[data-value="days"]'),
    hoursField: document.querySelector('[data-value="hours"]'),
    minsField: document.querySelector('[data-value="mins"]'),
    secsField: document.querySelector('[data-value="secs"]')
}


class CountdownTimer {
    constructor({ selector, targetDate, onTick }){
        this.targetDate = targetDate;
        this.selector = selector;
        this.onTick = onTick;
    }
    start(){
        const targetDate = new Date('October 27, 2021');//здесь задаем конечную дату
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time)
        }, 1000)
        
    }

    getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }

    pad(value) {
    return String(value).padStart(2, '0');
  }
}

const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Oct 27, 2021'),
    onTick: updateClockface
});

countdownTimer.start();

function updateClockface({ days, hours, mins, secs }) {
    refs.daysField.textContent = `${days}`;
    refs.hoursField.textContent = `${hours}`;
    refs.minsField.textContent = `${mins}`;
    refs.secsField.textContent = `${secs}`;
}
