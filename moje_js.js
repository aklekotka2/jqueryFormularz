var main=function(){
  $('input').focus(function(){

    $(this).css('background','#ddd');
  });

  var input=$('input[type=email]');
  var pass=$('input[type=password]');

  function dodajKomunikat(){

  	$(this).parent().find('label').remove();

  	var lengthInput=0;
  	lengthInput=$(this).val().length;

    var etykieta= $('<label class=\'komunikat\'></label>');
    $(this).parent().append( etykieta);

    if(lengthInput<=4){
     
    	//$(this).parent().append( label );
    	etykieta.text('ten tekst jest za krótki');
        //console.log($(this).parent().find('.komunikat').length);
    }
    else if(lengthInput>4)
    {
    	
    	//$(this).parent().append( label );
    	
    	etykieta.text('Ok');
    	//$('.komunikat').removeClass('komunikat');
    }

  }


  input.on('keydown',dodajKomunikat);
  pass.on('keydown', dodajKomunikat);

  $('form').on('submit', function(e){
  	e.preventDefault;
  	alert('Wysłane!!!');

  })


}
$(document).ready(main);