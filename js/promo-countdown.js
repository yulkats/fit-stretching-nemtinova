class Promotion {
  constructor() {
    this.days = document.getElementById("days");
    this.hours = document.getElementById("hours");
    this.minutes = document.getElementById("minutes");
    this.seconds = document.getElementById("seconds");
    this.countdown = document.getElementById("countdown");
    this.year = document.getElementById("year");
    this.currentYear = new Date().getFullYear();
    this.finishTime = new Date(`december 5 ${this.currentYear} 00:00:00`);
    
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const currentTime = new Date();
    const diff = this.finishTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // Add values to DOM
    this.days.innerHTML = d;
    this.hours.innerHTML = h < 10 ? "0" + h : h;
    this.minutes.innerHTML = m < 10 ? "0" + m : m;
    this.seconds.innerHTML = s < 10 ? "0" + s : s;
  }
}

new Promotion();
