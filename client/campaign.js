const baseURL = `http://localhost:4545/campaign`;


document.getElementById("inverted").onclick = function () {
    axios.get("http://localhost:4545/campaign/")
        .then(function (response) {
        const data = response.data;
        document.body.style.background = "#000000";
        document.getElementById("header").style.backgroundColor = "#000000";
        document.getElementById("bg").style.backgroundColor = "#ffffff";

        document.body.style.color = "#FFFFFF";
        document.getElementById("header").style.color = "#ffffff";
        document.getElementById("bg").style.color = "#000000";
          });
  

  
document.getElementById("original").onclick = function () {
    axios.get("http://localhost:4545/campaign/")
        .then(function (response) {
        const data = response.data;
        document.body.style.background = "#FFFFFF";
        document.getElementById("header").style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";
        document.getElementById("header").style.color = "#000000";
        document.getElementById("bg").style.backgroundColor = "#FFFFFF";
        document.getElementById("bg").style.color = "#000000";
          })}};

          var questions = document.querySelectorAll(".question");

          questions.forEach(function(question){
            const btn = question.querySelector ('.question-btn');
              btn.addEventListener('click',function(){
              
              question.classList.toggle('show-text')
              
            })
          });

// Set the date we're counting down to
var countDownDate = new Date("Nov 10, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);