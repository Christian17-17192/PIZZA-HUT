// AOS Animation

AOS.init({
    duration: 1000
});

// LOADER

window.addEventListener("load", () => {

    document.getElementById("loader").style.display = "none";

});

// STICKY NAVBAR

window.addEventListener("scroll", () => {

    const navbar = document.getElementById("navbar");

    if(window.scrollY > 50){

        navbar.classList.add("sticky");

    } else{

        navbar.classList.remove("sticky");

    }

});

// MODAL

function openModal(){

    document.getElementById("orderModal").style.display = "flex";

}

function closeModal(){

    document.getElementById("orderModal").style.display = "none";

}

// CLOSE MODAL OUTSIDE CLICK

window.onclick = function(e){

    const modal = document.getElementById("orderModal");

    if(e.target == modal){

        modal.style.display = "none";

    }

}