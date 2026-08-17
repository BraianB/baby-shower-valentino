document.addEventListener("DOMContentLoaded", () => {

    const confirmBtn =
        document.getElementById("confirmBtn");

    const cancelBtn =
        document.getElementById("cancelBtn");

    const modal =
        document.getElementById("confirmationModal");

    const sendBtn =
        document.getElementById("sendWhatsappBtn");

    const familyName =
        document.getElementById("familyName");

    const guestCount =
        document.getElementById("guestCount");

    const decreaseGuests =
        document.getElementById("decreaseGuests");

    const increaseGuests =
        document.getElementById("increaseGuests");


    if (
        !confirmBtn ||
        !cancelBtn ||
        !modal ||
        !sendBtn
    ) {

        console.error(
            "No se encontraron los elementos del modal."
        );

        return;
    }


    // =========================================
    // CANTIDAD DE INTEGRANTES
    // =========================================

    let guests = 1;

    const MIN_GUESTS = 1;
    const MAX_GUESTS = 10;


    function updateGuestCount() {

        guestCount.textContent = guests;

    }


    decreaseGuests.addEventListener("click", () => {

        if (guests > MIN_GUESTS) {

            guests--;

            updateGuestCount();

        }

    });


    increaseGuests.addEventListener("click", () => {

        if (guests < MAX_GUESTS) {

            guests++;

            updateGuestCount();

        }

    });


    // =========================================
    // ABRIR MODAL
    // =========================================

    confirmBtn.addEventListener("click", () => {

        modal.classList.add("active");

    });


    // =========================================
    // CERRAR MODAL
    // =========================================

    cancelBtn.addEventListener("click", () => {

        modal.classList.remove("active");

    });


    // =========================================
    // CERRAR TOCANDO AFUERA
    // =========================================

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            modal.classList.remove("active");

        }

    });


    // =========================================
    // CERRAR CON ESC
    // =========================================

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            modal.classList.remove("active");

        }

    });


    // =========================================
    // ENVIAR WHATSAPP
    // =========================================

    sendBtn.addEventListener("click", () => {
         const blueHeart = "\u{1F499}";
const teddy = "\u{1F9F8}";


        const family =
            familyName.value.trim();


        const attendance =
            document.querySelector(
                'input[name="attendance"]:checked'
            );


        // =====================================
        // VALIDAR FAMILIA
        // =====================================

        if (!family) {

            alert(
                "Por favor, indicá el apellido o nombre de la familia."
            );

            familyName.focus();

            return;
        }


        // =====================================
        // VALIDAR ASISTENCIA
        // =====================================

        if (!attendance) {

            alert(
                "Por favor, indicá si asistirán."
            );

            return;
        }


        // =====================================
        // RESPUESTA
        // =====================================

        let answer = "";


        if (attendance.value === "yes") {

            const integrantes =
                guests === 1
                    ? "1 integrante"
                    : `${guests} integrantes`;


            answer =
                `Sí, asistiremos ${blueHeart}  \n\n` +
                `Cantidad de integrantes: ${integrantes}.`;

        } else {

            answer =
                "No podremos asistir.";

        }


        // =====================================
        // MENSAJE
        // =====================================

    
const message =
`Hola ${blueHeart}

Somos la familia ${family}.

Queremos confirmar nuestra asistencia al Baby Shower de Valentino.

${answer}

¡Muchas gracias! ${teddy}${blueHeart}`;


        // =====================================
        // NÚMERO DESTINO
        // =====================================

        const phone = CONFIG.whatsapp;


        // =====================================
        // URL WHATSAPP
        // =====================================

       const whatsappUrl =
    `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
            console.log(message);
console.log(encodeURIComponent(message));


        // =====================================
        // ABRIR WHATSAPP
        // =====================================

        window.open(
            whatsappUrl,
            "_blank"
        );

    });

});

// =========================================
// CÓMO LLEGAR
// =========================================

const mapsBtn = document.getElementById("mapsBtn");

if (mapsBtn) {

    mapsBtn.addEventListener("click", () => {

        const address = "A. Lincoln 1252, Tucumán, Argentina";

        const mapsUrl = CONFIG.maps;

        window.open(
            mapsUrl,
            "_blank"
        );

    });

}