let active = false

document.addEventListener("DOMContentLoaded", ()=>{
    const revealBtn = document.querySelector(".social-media-reveal-btn");
    const fbIcon = document.querySelector(".fb-icon");
    const ytIcon = document.querySelector(".yt-icon");
    const igIcon = document.querySelector(".insta-icon");

    revealBtn.addEventListener("click", ()=>{
        active = !active;

        if(active){
            fbIcon.style.display = "flex";
            ytIcon.style.display = "flex";
            igIcon.style.display = "flex";

            setTimeout(()=>{
                fbIcon.style.opacity = "1";
                ytIcon.style.opacity = "1";
                igIcon.style.opacity = "1";

                fbIcon.style.transform = "translateY(0)";
                ytIcon.style.transform = "translateY(0)";
                igIcon.style.transform = "translateY(0)";
                revealBtn.style.transform = "rotate(180deg)";
            }, 100);
            return;
        }else{
            fbIcon.style.transform = "translateY(190px)";
            ytIcon.style.transform = "translateY(124px)";
            igIcon.style.transform = "translateY(60px)";
            
            setTimeout(()=>{
                fbIcon.style.opacity = "0";
                ytIcon.style.opacity = "0";
                igIcon.style.opacity = "0";
                
                setTimeout(()=>{
                    fbIcon.style.display = "none";
                    ytIcon.style.display = "none";
                    igIcon.style.display = "none";
                    revealBtn.style.transform = "rotate(0)";
                }, 100);
            }, 100);
        }
    });

});