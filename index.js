
function sacarfoto(){

	navigator.camera.getPicture(onSuccess, onFail, {
	 quality: 50, destinationType: Camera.DestinationType.DATA_URL //opciones qu se escrien en formato json. Si yo necesito guardar foto no le tengo q poner
	 //dataurl sino file Uri
	 });

	function onSuccess(imageData) {  // tiene todos los datos en base 64 de la iamgen-
		var image = document.getElementById('myImage');
		 image.src = "data:image/jpeg;base64," + imageData; // crea la base para el src, y le pasa los datos en base 64 que levanteo de la camara.
	}

	 function onFail(message)  {

	  alert('Failed because: ' + message);
	}
}