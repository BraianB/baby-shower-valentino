function initScene(){

    const sky=document.getElementById("sky");

    for(let i=0;i<150;i++){

        createStar(sky);
        function createStar(sky){

    const star=document.createElement("span");

    star.classList.add("star");

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    const size=Math.random()*6+1;

    star.style.width=size+"px";

    star.style.height=size+"px";

    star.style.opacity=Math.random()*0.6+0.3;

    star.style.setProperty(

        "--delay",

        Math.random()*5+"s"

    );

    gsap.to(star, {

    y: "+=8",

    duration: 4 + Math.random() * 4,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});

gsap.to(".balloons",{

    y:-15,

    duration:3,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

    const colors=[

        "#ffffff",

        "#FFF7C7",

        "#FFE99D",

        "#E9F7FF"

    ];

    star.style.background=

        colors[Math.floor(Math.random()*colors.length)];

    if(size>5){

        star.style.boxShadow="0 0 18px white";

    }
    else if(size>3){

        star.style.boxShadow="0 0 10px white";

    }
    else{

        star.style.boxShadow="0 0 4px white";

    }

    sky.appendChild(star);

}

    }

}