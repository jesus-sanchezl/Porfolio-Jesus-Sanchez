document.addEventListener("DOMContentLoaded", (e) => {
    

    let responsiveBtn = document.querySelector(".navbar__responsive-btn");
    let responsiveMenu = document.querySelector(".menu-responsive");


    const showHiddenMenu = () => {
                let show = document.querySelector(".menu-responsive--show");
        
                if (show) {
                    responsiveMenu.classList.remove("menu-responsive--show");
                } else {
                    responsiveMenu.classList.add("menu-responsive--show");
                }
            }

   
    responsiveBtn.addEventListener("click", showHiddenMenu );


    window.addEventListener("resize", () => {
        let windowWidth = parseInt(document.body.clientWidth);

        if (windowWidth >= 1000) {
            responsiveMenu.classList.remove("menu-responsive--show");
        }
    });



    let btnClose = document.querySelector(".menu-responsive__close");

    btnClose.addEventListener("click", showHiddenMenu);
});
