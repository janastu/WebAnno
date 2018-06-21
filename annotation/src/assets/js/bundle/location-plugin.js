var Annotator = require("annotator");
var DebugStore = require("annotator/lib/plugin/debugstore");


$ = Annotator.Util.$;

Annotator.Plugin.Location= (function () { 
  function Location() {}

  Location.prototype.pluginInit = funtcion () {
  	var self = this;
     navigator.geolocation.getCurrentPosition(function (pos) {
     self.coords = pos.coords;
     });

     self.annotator.on('beforeAnnotationCreated', function (ann) {
     	if (self.coords != null) {
     	ann.coords = {};
     	ann.coords.latitude = self.coords.latitude;
     	ann.coords.longitude = self.coords.longitude;
     	ann.coords.accuracy = self.coords.accuracy;
     	}
     });
  };
 return Location;
}());



$(function(){
	var ann = new Annotator(document.body, {
	store: { type: DebugStore }
});
	ann.addPlugin('Location');


}());