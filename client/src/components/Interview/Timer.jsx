import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round1: false,
      round2: false,
      seconds: 0,
      minutes: 0,
      message: 'Click to begin',
      round: 0
    };
  }
  componentDidMount() {
    const timeInMinutes = .2;
    const currentTime = Date.parse(new Date());
    const deadline = new Date(currentTime + timeInMinutes * 60 * 1000);
    this.initializeTimer('clockdiv', deadline);
    const self = this;
  }
  componentDidUpdate() {
    if (this.state.minutes === 0 && this.state.seconds === 0 && this.state.round === 1 && !this.state.round1) {
      const { showNextQuestion } = this.props;
      this.setState({
        round1: true
      })
      const timeInMinutes = .2;
      const currentTime = Date.parse(new Date());
      const deadline = new Date(currentTime + timeInMinutes * 60 * 1000);
      setTimeout(() => {
        showNextQuestion();
        this.initializeTimer('clockdiv', deadline);
      }, 3000);
    }
    if (this.state.minutes === 0 && this.state.seconds === 0 && this.state.round === 2 && !this.state.round2) {
       this.setState({
        round2: true
      });
      const timeInMinutes = .2;
      const currentTime = Date.parse(new Date());
      const deadline = new Date(currentTime + timeInMinutes * 60 * 1000);
      setTimeout(() => {
        const { showNextQuestion } = this.props;
        showNextQuestion();
        this.initializeTimer('clockdiv', deadline);
      }, 3000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.timeinterval);
  }
  getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t/1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / 1000 * 60 * 60) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days,
      hours,
      minutes,
      seconds
    };
  }
  initializeTimer(id, endtime) {
    const { showNextQuestion } = this.props;
    const self = this;
    const clock = document.getElementById(id);
    const updateClock = () => {
      const t = this.getTimeRemaining(endtime);
      const message = `${t.minutes} : ${t.seconds}`;
      self.setState({
        seconds: t.seconds,
        minutes: t.minutes,
        message,
      });
      if (t.total <= 0) {
        clearInterval(self.timeinterval);
      }
    };
    self.timeinterval = setInterval(updateClock, 1000);
    updateClock();
    this.setState({
      round: this.state.round + 1
    });
  }
  startTimer() {
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h5>{`question: ${this.state.round} of 3`}</h5>
      </div>
    );
  }
}

export default Timer;

