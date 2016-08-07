(function(module){
var parkObj = {};
parkObj.allParks = [];
parkObj.requestData = function(next) {

  $.get('')
  .done(function(data) {
    parkObj.allParks =  data;
  }).done(next);
};
module.parkObj = parkObj;


})(window);
