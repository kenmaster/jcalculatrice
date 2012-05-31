$(function(){
  var val = new Array();
  var temp;
  val = ['','','','','7','8','9','','4','5','6','','1','2','3','','0','.','','']
  
  $('.nombres td').click(function(){
    var index = $(this).index('.nombres td');
    var memo = $('#affichage div').html();
      
    if(memo == 0){
        memo = '';
    }
    //$('#resultat').html(val[index]);
    $('#resultat').html(memo+val[index]);
  });
})

function init() {
  aff = $('#resultat').html(0);
  return aff;
}

function index(btn) {
  var index = $(this).index();
  console.log(index);
}

function memoriser() {
  memo = $('#resultat').html();
  return memo;
}

function supprimer() {
  if(memo) {
    delete memo;
    return true;
  }
  else{
    return false;
  }
}

function rappel() {
  if(memo){
    $('#resultat').html(memo);
    return true;
  }
  else {
    return false;
  }
}

function resultat() {
  if(temp) {
    var second = parseInt($('#resultat').html());
    var first = temp[0]; 
    switch(temp[1]){
      case 'add':   resultat = first+second;
        break;
      case 'del':   resultat = first-second;
        break;
      case 'mult':  resultat = first*second;
        break;
      case 'div':   resultat = first/second;
        break;
    }
    
    console.log(resultat);
    $('#resultat').html(resultat);
  }
}

function additionner(){
  var first = parseInt($('#resultat').html());
  temp = [first,'add'];
  console.log(temp);
}

function soustraire(){
  var first = parseInt($('#resultat').html());
  temp = [first,'del'];
  console.log(temp);
}

function multiplier(){
  var first = parseInt($('#resultat').html());
  temp = [first,'mult'];
  console.log(temp);
}

function diviser(){
  var first = parseInt($('#resultat').html());
  temp = [first,'div'];
  console.log(temp);
}