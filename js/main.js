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