// Definir a data do evento
const eventDate = new Date("Dec 06, 2024 19:30:00").getTime();
const subscribeDate = new Date("Nov 20, 2024 23:59:59").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
    const dayLeft = subscribeDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const day = Math.floor(dayLeft / (1000 * 60 * 60 * 24));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("event-day").innerHTML = day;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "O evento começou!";
    }
}, 1000);

function inscrever() {
    alert("Inscrição realizada com sucesso!");
}
