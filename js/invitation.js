function animateInvitation(){

    const tl = gsap.timeline();

   tl.to(".invitation-card",{
        opacity:1,
        y:0,
        scale:1,
        duration:.7,
        ease:"back.out(1.3)"
    });

    tl.from(".bear",{
        opacity:0,
        scale:.5,
        duration:.4
    });

    tl.from(".header h3",{
        opacity:0,
        y:20,
        duration:.3
    });

    tl.from(".header h1",{
        opacity:0,
        y:20,
        duration:.4
    });

    tl.from(".subtitle",{
        opacity:0,
        y:15,
        duration:.3
    });

    tl.from(".detail",{
        opacity:0,
        x:-20,
        stagger:.15
    });

    tl.from(".countdown-item",{
        opacity:0,
        y:20,
        stagger:.08
    });

    tl.from(".buttons",{
        opacity:0,
        y:20,
        stagger:.12
    });


}

function initInvitation(){

    document.getElementById("baby-name").textContent = CONFIG.babyName;

    document.getElementById("event-date").textContent = CONFIG.date;

    document.getElementById("event-time").textContent = CONFIG.time;

    document.getElementById("event-address").textContent = CONFIG.address;

}