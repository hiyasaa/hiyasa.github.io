.slider img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 20px;
    transform: scale(1.01);
}
document.getElementById("payment").addEventListener("change", function(){
    let bank = document.getElementById("bankDetails");

    if(this.value === "Bank Transfer"){
        bank.style.display = "block";
    } else {
        bank.style.display = "none";
    }
});
