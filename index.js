
function sacarfoto(){

	navigator.camera.getPicture(onSuccess, onFail, {
	 quality: 50, destinationType: Camera.DestinationType.FILE_URI //opciones qu se escrien en formato json. Si yo necesito guardar foto no le tengo q poner
	 //dataurl sino file Uri
	 });

	function onSuccess(imageData) {  // tiene todos los datos en base 64 de la iamgen-
		var image = document.getElementById('myImage');
		image.src = imageData; // contiene url

		function win(r) {
		     alert("si si subio");
		}

		function fail(error) {
		    alert("No subio");
		    
		}

		var uri = encodeURI("200.26.189.133/~ucymxbzr/fotos/upload.php");

		var options = new FileUploadOptions();
		options.fileKey="foto"; //nombre del arvhivo apra leerlo en php
		options.fileName="GAbi_"+imageData.substr(imageData.lastIndexOf('/')+1); //nombre de archivo para alojar en servidor
		
	
		var ft = new FileTransfer();
			
		ft.onprogress = function(progressEvent) {

			    if (progressEvent.lengthComputable) {
			   var percent = progressEvent.loaded / progressEvent.total;
			
				$("porcentaje").html("subido " + percent +"%");
			    }
			};
		
		ft.upload(imageData, uri, win, fail, options);



	}

	 function onFail(message)  {

	  alert('Failed because: ' + message);
	}
}