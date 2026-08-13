/* ==================================================
   KOSKU2 JAVASCRIPT
================================================== */


/* ==================================================
   MENU MOBILE
================================================== */

const menuButton = document.getElementById("menuButton");

const navMenu = document.getElementById("navMenu");


menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});



/* ==================================================
   TUTUP MENU SETELAH KLIK
================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

    });

});



/* ==================================================
   NAVBAR SAAT SCROLL
================================================== */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");


    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* ==================================================
   DETAIL KAMAR
================================================== */

function showRoom(namaKamar, harga) {

    const modal = document.getElementById("roomModal");

    const title = document.getElementById("modalTitle");

    const price = document.getElementById("modalPrice");


    title.textContent = namaKamar;

    price.textContent = harga;


    modal.classList.add("show");

}



/* ==================================================
   TUTUP DETAIL KAMAR
================================================== */

function closeRoom() {

    const modal = document.getElementById("roomModal");

    modal.classList.remove("show");

}



/* ==================================================
   KLIK DI LUAR MODAL
================================================== */

const modal = document.getElementById("roomModal");


modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        closeRoom();

    }

});



/* ==================================================
   TOMBOL ESC UNTUK MENUTUP MODAL
================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeRoom();

    }

});


/* ==================================================
   CONSOLE
================================================== */

console.log("Kosku2 Website berhasil dijalankan!");