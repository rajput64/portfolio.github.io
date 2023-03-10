const navToggler = document.querySelector(".nav-toggler");
        navToggler.addEventListener("click",()=>{
            navToggler.classList.toggle("active");
           const nav = document.querySelector(".nav");
           nav.classList.toggle('open');
           if(nav.classList.contains("open")){
            nav.style.maxHeight = nav.scrollHeight + "px"
           }
           else{
            nav.removeAttribute("style");
           }
        })

        //day light
        const day_light = document.getElementById("day_light");
        day_light.addEventListener("click",()=>{
            console.log('day light');
            const element =document.body;
            element.classList.toggle("dark-mode");
            //for navbar
           const day_light = document.getElementById('day_light');
            if(day_light.src.match("sun.png")){
                day_light.src= "asset/img/moon.png";
            }else{
                day_light.src = "asset/img/sun.png";
            }
        })

        //image modal show on click image
        const modal= document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        const gallery_img = document.getElementsByClassName('gallery_img');
        Array.from(gallery_img).forEach(e=> e.addEventListener('click',()=>{
            modal.style.display = "block";
            modalImg.src = e.src;
            console.log(e.alt);
        }))
        //get close btn
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function(){
            modal.style.display= "none";
        }


    //typed cdn javac
        var typed = new Typed('#typed',{
            stringsElement: '#typed-strings',
            typeSpeed: 150,
            backSpeed: 150,
            fadeOut:false
        });

    //animate on scroll
        function reveal(){
            var reveals = document.querySelectorAll(".reveal");

            for(var i = 0; i<reveals.length ; i++){
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if(elementTop < windowHeight - elementVisible){
                    reveals[i].classList.add("active");
                }else{
                    reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal)