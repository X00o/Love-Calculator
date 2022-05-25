let mybtn =document.getElementById('btn');
let nnn= document.querySelector('.class1')
mybtn.addEventListener('click',function(){
    var numberforLove = Math.random();
     numberforLove = numberforLove *100;
     numberforLove =Math.floor(numberforLove) + 1;
    alert("Your Love Score: " + numberforLove + "% ")
    window.location.reload();
})
nnn.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // event.preventDefault();
        document.getElementById("btn").click();
      }
});