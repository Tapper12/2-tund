(function(){
  "use strict";


  var Moosipurk = function(){

    // SINGLETON PATTERN (4 rida)
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }
    Moosipurk.instance = this; // this viitab moosipurgile

    console.log(this);
    //console.log('moosipurgi sees');
    //Stardin rakenduse

    //Kõik muutujad, mis on üldised ja muudetavad siin
    this.click_count = 0;
    var clock = document.getElementById('clock');

    this.init();
  };


  Moosipurk.prototype = {

    init: function(){

      console.log("Rakendus käivitus");
      //Siia tuleb esialgne loogika
      //Hakka kuulama hiireklõpse
      window.setInterval(function(){
        //Iga 500ms tagant refresh põhimõtteliselt
        writeDate();
      }, 500);

      clock.addEventListener('click', function(event){

        if(event){
          document.getElementById("clock").style.fontStyle = "normal";
        }
      });

      clock.addEventListener('dblclick', function(event){

        if(event){
          document.getElementById("clock").style.fontStyle = "italic";
        }
      });


    window.addEventListener('keyup', function(event){

      if(event.which == 107){
        document.getElementById("clock").style.fontSize = "800%";
      }

      if(event.which == 109){
        document.getElementById("clock").style.fontSize = "200%";
      }

      if(event.which == 35){
        document.getElementById("clock").style.fontSize = "500%";
      }


    });

    window.addEventListener('keyup', function(event){

      if(event.which == 38){
        document.getElementById("clock").style.color = "green";
        document.body.style.backgroundColor = "red";

      }

      if(event.which == 40){
        document.getElementById("clock").style.color = "blue";
        document.body.style.backgroundColor = "green";
      }

      if(event.which == 39){
        document.getElementById("clock").style.color = "red";
        document.body.style.backgroundColor = "blue";
      }

      if(event.which == 37){
        document.getElementById("clock").style.color = "black";
        document.body.style.backgroundColor = "yellow";
      }

    });



    // Võtab aja ja kirjutab clock elemendi sisse
    function writeDate(){

      var today = new Date();

      var day = today.getDate();
      var year = today.getFullYear();
      var month = today.getMonth();
      var hours = today.getHours();
      var minutes = today.getMinutes();
      var seconds = today.getSeconds();

      //Kuupäeva õpetuse sain siit- http://www.w3schools.com/js/js_date_methods.asp

      clock.innerHTML = addZeroBefore(day) + '.' + addZeroBefore(month + 1) + '.' + year + ' ' + addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    }


    function addZeroBefore(number){

      if(number < 10){

        number = "0" + number;
      }

      return number;


    }
    },
  };


  window.onload = function(){
    var app = new Moosipurk();
    document.body.style.backgroundColor = "yellow";
    document.getElementById("clock").style = "color: red; text-align: center; vertical-align: middle; width: 100%";
    document.getElementById("clock").style.fontSize = "500%";
    document.getElementById("clock").style.fontStyle = "italic";
  };

})();
