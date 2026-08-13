/* =========================================================
   ENVELOPE — APERTURA + TRANSICIÓN A INVITACIÓN
   BABY SHOWER VALENTINO
   ========================================================= */

let envelopeOpened = false;

function initEnvelope() {

    const seal = document.querySelector(".seal");

    if (!seal || typeof gsap === "undefined") {
        console.warn("Envelope: falta .seal o GSAP.");
        return;
    }

    /* =====================================================
       ESTADO INICIAL
       ===================================================== */

    gsap.set(".flap", {
        rotateX: 0,
        transformOrigin: "50% 0%",
        zIndex: 3
    });

    gsap.set(".letter", {
        y: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        zIndex: 3
    });

    gsap.set(".front", {
        opacity: 1,
        zIndex: 5
    });

    gsap.set(".back", {
        opacity: 1
    });

    gsap.set(".left-fold", {
        opacity: 1,
        x: 0
    });

    gsap.set(".right-fold", {
        opacity: 1,
        x: 0
    });

    gsap.set(".seal", {
        scale: 1,
        rotation: 0,
        opacity: 1
    });


    /* =====================================================
       CLICK
       ===================================================== */

    seal.addEventListener("click", openEnvelope);
}


/* =========================================================
   ABRIR SOBRE
   ========================================================= */

function openEnvelope() {

    if (envelopeOpened) return;

    envelopeOpened = true;

    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.3;
        music.play().catch(() => {});
    }


    const tl = gsap.timeline({
        defaults: {
            overwrite: "auto"
        }
    });


    /* =====================================================
       1. SELLO
       ===================================================== */

    tl.to(".seal", {
        scale: 1.12,
        duration: 0.14,
        ease: "power2.out"
    });

    tl.to(".seal", {
        scale: 0,
        rotation: 220,
        y: 20,
        opacity: 0,
        duration: 0.45,
        ease: "back.in"
    });


    /* =====================================================
       2. SOLAPA PASA AL FRENTE
       ===================================================== */

    tl.set(".flap", {
        zIndex: 9
    });


    /* =====================================================
       3. SOLAPA SE ABRE
       ===================================================== */

    tl.to(".flap", {
        rotateX: 180,
        duration: 0.9,
        ease: "power2.inOut"
    });


    /* =====================================================
       4. CARTA SALE
       ===================================================== */

    tl.to(".letter", {
        y: -220,
        duration: 1,
        ease: "power3.out"
    }, "-=0.45");


    /* =====================================================
       5. REBOTE
       ===================================================== */

    tl.to(".letter", {
        y: -205,
        duration: 0.18,
        ease: "power2.inOut"
    });

    tl.to(".letter", {
        y: -215,
        duration: 0.18,
        ease: "power2.inOut"
    });

    tl.to(".letter", {
        y: -210,
        duration: 0.18,
        ease: "power2.inOut"
    });


    /* =====================================================
       6. LATERALES SE SEPARAN
       ===================================================== */

    tl.to(".left-fold", {
        x: -40,
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut"
    }, "-=0.2");

    tl.to(".right-fold", {
        x: 40,
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut"
    }, "<");


    /* =====================================================
       7. FRENTE DESAPARECE
       ===================================================== */

    tl.to(".front", {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out"
    }, "-=0.2");


    /* =====================================================
       8. FONDO DESAPARECE
       ===================================================== */

    tl.to(".back", {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out"
    }, "<");


    /* =====================================================
       9. SOLAPA QUEDA DETRÁS
       ===================================================== */

    tl.set(".flap", {
        zIndex: 1
    });


    /* =====================================================
       10. CARTA PASA AL FRENTE
       ===================================================== */

    tl.set(".letter", {
        zIndex: 50
    });


    /* =====================================================
       11. CARTA CRECE
       ===================================================== */

    tl.to(".letter", {
        scale: 2.4,
        rotation: -2,
        duration: 0.6,
        ease: "power2.inOut"
    });


    tl.to(".letter", {
        rotation: 0,
        duration: 0.6,
        ease: "power2.out"
    });


    /* =====================================================
       12. ESCENA SE DESENFOCA
       ===================================================== */

    tl.to("#scene", {

        filter: "blur(3px)",

        scale: 0.98,

        opacity: 0.8,

        duration: 0.8,

        ease: "power2.out"

    }, "<");


    /* =====================================================
       13. APARECE LA INVITACIÓN
       ===================================================== */

    tl.call(() => {

        const invitation =
            document.querySelector(".invitation");

        if (invitation) {
            invitation.classList.add("active");
        }

    });


    /* =====================================================
       14. FADE IN DE LA INVITACIÓN
       ===================================================== */

    tl.to(".invitation", {

        opacity: 1,

        duration: 0.9,

        ease: "power2.out"

    });


    /* =====================================================
       15. CARTA DESAPARECE
       ===================================================== */

    tl.to(".letter", {

        opacity: 0,

        duration: 0.25,

        ease: "power2.out"

    }, "-=0.4");


    /* =====================================================
       16. ANIMACIÓN INTERNA
       ===================================================== */

    tl.call(() => {

        if (typeof animateInvitation === "function") {
            animateInvitation();
        }

    });

}


/* =========================================================
   INICIO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initEnvelope
);