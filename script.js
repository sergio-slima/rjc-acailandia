// Definir a data do evento
const eventDate = new Date("May 23, 2025 19:30:00").getTime();
const subscribeDate = new Date("Mar 10, 2025 23:59:59").getTime();

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

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('scrollButton').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão
    document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToTopButton').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
