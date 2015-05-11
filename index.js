
function sacarfoto(){

	navigator.camera.getPicture(onSuccess, onFail, {
	 quality: 50, destinationType: Camera.DestinationType.FILE_URI //opciones qu se escrien en formato json.
	 });

	function onSuccess(imageData) {  // tiene todos los datos en base 64 de la iamgen-
		var image = document.getElementById('myImage');
		 image.src = "data:image/jpeg;base64," + imageData; // crea la base para el src, y le pasa los datos en base 64 que levanteo de la camara.
	}

	 function onFail(message)  {

	  alert('Failed because: ' + message);
	}
}