/* =========================================
   COUNTDOWN
   BABY SHOWER VALENTINO
========================================= */

const targetDate = new Date(
    "2026-09-05T17:00:00-21:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;


    /* =========================================
       ELEMENTOS
    ========================================= */

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");


    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        return;
    }


    /* =========================================
       EVENTO FINALIZADO
    ========================================= */

    if (distance <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;
    }


    /* =========================================
       CÁLCULO
    ========================================= */

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (distance / 1000) % 60
    );


    /* =========================================
       MOSTRAR
    ========================================= */

    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


/* =========================================
   INICIO
========================================= */

updateCountdown();


/* =========================================
   ACTUALIZAR CADA SEGUNDO
========================================= */

setInterval(updateCountdown, 1000);