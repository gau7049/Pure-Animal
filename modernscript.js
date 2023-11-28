let img = document.querySelectorAll(".feed");
let poi = document.querySelectorAll(".point");
let t = 1;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  // Code for mobile devices
                console.log("This is a mobile device");

                gsap.to(".navbar",{
                    height: "50px",
                    y: -5,
                    backgroundColor: "black",
                    duration: 0.5,
                    scrollTrigger:{
                        trigger: ".navbar",
                        scroller: "body",
                        start: "top -10%",
                        end: "top -6%",
                        marker: true,
                        scrub: 1.3 // range 1 to 5 for smoothness
                    }
                });


                    gsap.from("#col1",{
                        y: -10,
                        x: -10,
                        scrollTrigger:{
                            trigger: "#col1",
                            scroller: "body",
                            start: "top 60%",
                            end: "top 56%",
                            scrub: 4
                        }
                    });
                    
                    gsap.from("#col2",{
                        y: 10,
                        x: 10,
                        scrollTrigger:{
                            trigger: "#col1",
                            scroller: "body",
                            start: "top 55%",
                            end: "top 45%",
                            scrub: 4
                        }
                    });

                gsap.from(".theme h1",{
                    x: 50,
                    opacity:0,
                    duration: 1,
                    // stagger: 0.4,// agar hume ek ek krke elements laane ho tb
                    scrollTrigger: {
                        trigger: ".theme",
                        scroller: "body",
                        start: "top 90%", // or yha pr opactiy 1 ho rhi h but 1s
                        end: "top 98%", // opacity meri 0 ho rhi h
                        scrub: 2
                    }
                });

                gsap.from("footer div",{
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger:{
                        trigger: "footer div",
                        scroller: "body",
                        start: "top 90%",
                        end: "top 95%",
                        scrub: 1
                    }
                });

                
                // poi[0].style.backgroundColor = "green";
                poi[0].querySelector(".try").style.backgroundColor = "#95C11E"
                
                
                setInterval(function(){
                    if(t==0){
                        img[img.length-1].style.display = "none";
                        poi[img.length-1].querySelector(".try").style.backgroundColor = "white"
                    } else {
                        console.log(t-1);
                        img[t-1].style.display = "none";
                        poi[t-1].querySelector(".try").style.backgroundColor = "white"
                    }
                
                    img[t].style.display = "block";
                    poi[t].querySelector(".try").style.backgroundColor = "#95C11E"
                    t = (t + 1) % img.length;
                }, 5000);
  


} else {

    // Code for laptops/desktops
                // alert("This is a laptop/desktop");

                let crs = document.querySelector("#cursor");
                let blrcrs = document.querySelector("#blur-cursor");
                
                document.body.addEventListener("mousemove",function(event){
                    // crs.style.left = event.x + "px";
                    // crs.style.top  = event.y + "px";
                    // blrcrs.style.left = event.x - 190 + "px";
                    // blrcrs.style.top  = event.y - 200 + "px";
                    gsap.to("#cursor",{
                        left: event.clientX -10  + "px",
                        top: event.clientY - 10 + "px",
                        ease: Power3
                    });
                    gsap.to("#blur-cursor",{
                        left: event.clientX - 190 + "px",
                        top: event.clientY - 200 + "px",
                        ease: Power3
                    });
                });

                gsap.to(".navbar",{
                    height: "4vw",
                    y: -18,
                    backgroundColor: "black",
                    duration: 0.5,
                    scrollTrigger:{
                        trigger: ".navbar",
                        scroller: "body",
                        start: "top -10%",
                        end: "top -6%",
                        marker: true,
                        scrub: true, // for repetation
                        scrub: 1.3 // range 1 to 5 for smoothness
                        }
                    });

                    let makeBig = document.querySelectorAll(".chn");
                    
                    
                    for(let v = 0; v < makeBig.length; ++v){
                    
                        makeBig[v].addEventListener("mouseover",function(){
                            crs.style.backgroundColor = "transparent";
                            crs.style.border = "2px solid #95C11E";
                            crs.style.height = "40px";
                            crs.style.width = "40px";
                        });
                    
                        makeBig[v].addEventListener("mouseout",function(){
                        crs.style.backgroundColor = "#95C11E";
                        crs.style.border = "none";
                        crs.style.height = "20px";
                        crs.style.width = "20px";
                        });
                    }
                    
                    gsap.from(".theme h1",{
                        x: 50,
                        opacity:0,
                        duration: 1,
                        // stagger: 0.4,// agar hume ek ek krke elements laane ho tb
                        scrollTrigger: {
                            trigger: ".theme",
                            scroller: "body",
                            start: "top 50%", // or yha pr opactiy 1 ho rhi h but 1s
                            end: "top 48%", // opacity meri 0 ho rhi h
                            scrub: 1
                        }
                    });

                    gsap.from("#col1",{
                        y: -70,
                        x: -70,
                        scrollTrigger:{
                            trigger: "#col1",
                            scroller: "body",
                            start: "top 55%",
                            end: "top 45%",
                            scrub: 4
                        }
                    });
                    
                    gsap.from("#col2",{
                        y: 70,
                        x: 70,
                        scrollTrigger:{
                            trigger: "#col1",
                            scroller: "body",
                            start: "top 55%",
                            end: "top 45%",
                            scrub: 4
                        }
                    });

                    gsap.from("footer div",{
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        scrollTrigger:{
                            trigger: "footer div",
                            scroller: "body",
                            start: "top 93%",
                            end: "top 92%",
                            scrub: 1
                        }
                    });

                    let img = document.querySelectorAll(".feed");
                let poi = document.querySelectorAll(".point");

                // poi[0].style.backgroundColor = "green";
                poi[0].style.border = "3px solid #95C11E";
                poi[0].style.borderRadius = "50%";
                poi[0].style.height = "20px"
                poi[0].style.width = "20px"
                poi[0].style.padding = "10px";
                poi[0].querySelector(".try").style.backgroundColor = "#95C11E"

                setInterval(function(){
                    if(t==0){
                        img[img.length-1].style.display = "none";
                        poi[img.length-1].style.border = "none";
                        poi[img.length-1].style.borderRadius = "0%";
                        poi[img.length-1].style.height = "15px"
                        poi[img.length-1].style.width = "15px"
                        poi[img.length-1].style.padding = "0px";
                        poi[img.length-1].querySelector(".try").style.backgroundColor = "white"
                        poi[img.length-1].querySelector(".try").style.margin = "0px -5px"
                    } else {
                        console.log(t-1);
                        img[t-1].style.display = "none";
                        poi[t-1].style.border = "none";
                        poi[t-1].style.borderRadius = "0%";
                        poi[t-1].style.height = "15px"
                        poi[t-1].style.width = "15px"
                        poi[t-1].style.padding = "0px";
                        poi[t-1].querySelector(".try").style.backgroundColor = "white"
                    }

                    img[t].style.display = "block";
                    poi[t].style.border = "3px solid #95C11E";
                    poi[t].style.borderRadius = "50%";
                    poi[t].style.height = "20px"
                    poi[t].style.width = "20px"
                    poi[t].style.padding = "10px";
                    poi[t].querySelector(".try").style.backgroundColor = "#95C11E"
                    poi[t].style.margin = "0px -5px";
                    t = (t + 1) % img.length;
                }, 5000);

}

for(let end = 1; end < img.length; ++end){
    img[end].style.display = "none";
}


gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -30%", // 30% down scroll krne pr start hooga 
        end: "top -80%", // 80% down scroll krne tk black color hojayega
        scrub: true,
        scrub: 1.3
    }
});


let vid = document.querySelectorAll(".box");

for(let end = 0; end < vid.length; ++end){

    vid[end].addEventListener("mouseover", function(){
        let t = this.querySelector("video");
        console.log(t);
        t.play();
        this.querySelector("h2").style.visibility = "visible";
    });
    
    vid[end].addEventListener("mouseout",function(){
        this.querySelector("video").pause();
        this.querySelector("h2").style.visibility = "hidden";
    })
}


// my favourite
gsap.from(".takeCareAnimals img, section",{
    y: 50,
    opacity:0,
    duration: 1,
    // stagger: 0.4,// agar hume ek ek krke elements laane ho tb
    scrollTrigger: {
        trigger: ".takeCareAnimals",
        scroller: "body",
        start: "top 60%", // or yha pr opactiy 1 ho rhi h but 1s
        end: "top 58%", // opacity meri 0 ho rhi h
        scrub: 2
    }

});

gsap.from("#feedingAnimals",{
    y: 50,
    opacity:0,
    duration: 1,
    // stagger: 0.4,// agar hume ek ek krke elements laane ho tb
    scrollTrigger: {
        trigger: "#feedingAnimals",
        scroller: "body",
        start: "top 50%", // or yha pr opactiy 1 ho rhi h but 1s
        end: "top 48%", // opacity meri 0 ho rhi h
        scrub: 2
    }

});

gsap.from("#cards-container .v",{
    scale: 0.8,
    opacity:0,
    duration: 1,
    stagger: 0.4, // agar hume ek ek krke elements laane ho tb
    scrollTrigger: {
        trigger: ".v",
        scroller: "body",
        start: "top 60%", // or yha pr opactiy 1 ho rhi h but 1s
        end: "top 56%", // opacity meri 0 ho rhi h
        scrub: 2
    }

});

