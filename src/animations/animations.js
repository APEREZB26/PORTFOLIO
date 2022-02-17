export default function animations(){

    // Animations

    const logo = document.querySelector(".logo");
    const roll = document.querySelector("section");
    const hab = document.getElementById("hab")

    
    logo.classList.toggle('stycki', window.scrollY > 50)
    roll.classList.toggle("active",window.scrollY > 300)
    hab.classList.toggle("active",window.scrollY > 1200)

}