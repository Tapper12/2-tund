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

    this.init();
  };


  Moosipurk.prototype = {

    init: function(){

      console.log("Rakendus käivitus");
      //Siia tuleb esialgne loogika
      //Hakka kuulama hiireklõpse
      this.bindMouseEvents();
    },
    bindMouseEvents: function(){

      document.querySelector('.add-new-jar').addEventListener('click',this.addNewClick.bind(this));
    },
    addNewClick: function(event){

      //console.log(event);
      this.click_count++;
      console.log(this.click_count);
    }
  };


  window.onload = function(){
    var app = new Moosipurk();
  };

})();
