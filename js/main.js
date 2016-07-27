
//generar de un contacto
function addContact (contacto) {
	//para usar una variable dentro de una cadena, hay que cerrar las comillas
	var chat = '<div class="mensajes"> <img class="perfil" src="' + contacto.img + '">' + '<h6>' + contacto.fecha +'</h6>'+ '<h4>' + contacto.nombre + '</h4>'  + '</div>';
	$(".contactos").append(chat);

}
//esto es para recorrer os arreglos y lo agrego a la funcion addcontact. el for recorre el arrego hasta que este completo
function addSomeContacts (contacts){
	for(var i = 0; i < contacts.length; i++){
		addContact(contacts[i]);
	}
}

function buscar(contactos){
	//se necesita un arreglo para guardar los contactos ingresados en el input ya que tienen mas de una caracteristica
	var buscados =[];
	//esto es para que texto ingresado en el input quede en minusculas
	var texto = $("#buscar").val().toLowerCase();
	for(var i = 0; i < contactos.length; i++){
		//esto combierte en minuscula lo que parece en el arreglo
		var nombre = contactos[i].nombre.toLowerCase();
		var filtro = nombre.indexOf(texto);
		if ( filtro != -1){
			buscados.push(contactos[i]);
		}
	}
	$(".contactos").html("");
	if (texto === "") {
		addSomeContacts(contactos);
	}
	else{
		addSomeContacts(buscados);
	}
}		



//esto es para escribir en el chat
var text = $("#responder");
var chatPanel = $(".chat-panel");
var newHour = new Date();
	newHour.setTime(newHour.getTime());
	var hora = new Date().getHours();
	if (hora < 10) {
		hora = "0" + hora;
	}
	var minuto = new Date().getMinutes();
	if (minuto < 10) {
		minuto = "0" + minuto;
	}

$(text).keypress(function( event ) {
  if ( event.which == 13 ) {
     	chatPanel.append('<div>' + "<p class='texto'>" + text.val() + "</p>" + "<h5 class='texto'>" + hora + ":" + minuto + "</h5>" + '</div>');
	 	text.val("");	
    }
    var chat  = $(".texto").parent();
    chat.addClass("chat");
});

//asi activo la funcion para q se incie apenas se cargue la pagina
(function init (event) {
	//crear los contactos
	var contactosChat =[
		{nombre: 'las jackie chan',
		img:'image/jacky.jpg',
		fecha: '12/07'},
		{nombre: 'naty',
		img:'image/naty.jpg',
		fecha: '01/07'},
		{nombre: 'Pame',
		img: 'image/pame.jpg',
		fecha: '10:20'},
		{nombre: 'Cami',
		img: 'image/13815077_10210188232360961_543167604_n.jpg',
		fecha: '25/07'},
		{nombre: 'vale',
		img: 'image/vale.jpg',
		fecha: '12:35'},
		{nombre: 'Laboratoria Chile',
		img: 'image/logocodeacademy.png',
		fecha: '05/06'},
		{nombre: 'Laboratoria Chile',
		img: 'image/logocodeacademy.png',
		fecha: '05/06'}
	]
	//esto aun no ha sido filtrado por lo que agregara todos los contactos
	addSomeContacts(contactosChat);
	//con esto se le indica que al ingresar una letra en el input #buscar se ejecute la funcion buscar
	$("#buscar").on("keyup", function(){
		//a buscar le defino el parametro definido anteriormente
		buscar(contactosChat);
	});
	/*
	$(".emo").on("click", function(){
			$(".iconos").toggleClass("_hide");
		})*/
})()