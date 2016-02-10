(function(){
  "use strict";

  var Moosipurk = function(){

    //SINGLETON PATTERN (4 rida)
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }
    Moosipurk.instance = this;//This viitab moosipurgile

    console.log("Moosipurgi sees");
  };

  window.onload = function(){

  };

})();
