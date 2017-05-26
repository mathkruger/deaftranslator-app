$(document).ready(function () {
	function getTextoSelecionado() {
	    var text = "";
	    var activeEl = document.activeElement;
	    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;

	    if((activeElTagName == "textarea" || activeElTagName == "input") && /^(?:text|search|password|tel|url)$/i.test(activeEl.type) && (typeof activeEl.selectionStart == "number")){
	    	text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
	    }
	    else{
	    	if (document.getSelection) {
	      		text = document.getSelection().toString();
	      	}
	    }
	    
		return text;
	}

	function traduzirTexto(texto){
    	console.log(texto);
    	$.get("http://localhost/deaftranslator/api/libra/matheus123/" + texto, function(data){
      		var dados = JSON.parse(data);
      		console.log(dados.traducao);

      		var img = document.getElementById("result").setAttribute('src', "data:image/gif;base64," + dados.traducao);
    	});
  	}

  	$("#traduzir").click(function(){
    	traduzirTexto($("#texto").val());
  	});

  	$("#close").click(function() {
  		window.close();
  	});
});

