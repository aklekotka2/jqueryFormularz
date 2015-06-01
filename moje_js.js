var main=function(){
  //zmiana kolory tła w elemencie input 
  $('input').focus(function(){

    $(this).css('background','#ddd');
  });

  var input=$('input[type=email]');
  var pass=$('input[type=password]');
  //zmienna logiczna czyWyslac, informuje, czy formularz jest prawidlowo wypelniony, na tej podstawie wywoływane są określone zdarzenia
  var czyWyslac=false;

  function dodajKomunikat(){

  	$(this).parent().find('label').remove();
    //sprawdzenie długości tekstu wpisanego do inputa
  	var lengthInput=0;
  	lengthInput=$(this).val().length;

    var etykieta= $('<label class=\'komunikat\'></label>');
    $(this).parent().append( etykieta);

    if(lengthInput<=4){
     
    	etykieta.text('ten tekst jest za krótki');
        
    }
    else if(lengthInput>4)
    {
    	
     etykieta.text('Ok');
     //jesli wprowadzony tekst jest wystarczająco długi to czyWyslac prxyjmuje watość true
     czyWyslac=true;
    	
    }

  }

  //funkcja dodajKomunikat jest wywoływana wraz ze wciskaniem klawiatury
  input.on('keydown',dodajKomunikat);
  pass.on('keydown', dodajKomunikat);

  $('form').on('submit', function(e){
  	e.preventDefault;
    if(czyWyslac){
  	   alert('Wysłane!!!');
     }
    else{
        alert('Wypełnij prawidłowo formularz!')
     }


  })


}
$(document).ready(main);