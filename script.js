<script>
let images = [
    "images/abaya1.jpg",
    "images/abaya2.jpg",
    "images/abaya3.jpg",
    "images/abaya4.jpg"
];

let i = 0;

setInterval(() => {
    i = (i + 1) % images.length;
    document.getElementById("slide").src = images[i];
}, 3000);
</script>
