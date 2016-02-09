
function interest(){
var choice =$("input[name=option]:checked").val();
var period_choice=$("input[name=type]:checked").val();
 var p=$('#principle').val();
  var n=$('#period').val();
  var r=$('#rate').val()/100;
if(choice=="ci")
{


  if(period_choice=="weekly")
  {
    document.getElementById('result').innerText= (p*(Math.pow((1+(r/52)),n*52))).toFixed(2);
  }
  else if(period_choice=="monthly")
  {
        document.getElementById('result').innerText= (p*(Math.pow((1+(r/12)),n*12))).toFixed(2);
  }
  else if(period_choice=="yearly")
  {
    document.getElementById('result').innerText= (p*(Math.pow((1+r),n))).toFixed(2);
  }
}
else
{
  var total=Math.ceil(((parseInt(p) +(p*(r/(1-Math.pow((1+r),-n))))).toFixed(2))/$('#repayment').val());
  if(period_choice=="weekly")
  {
    document.getElementById('result').innerText= total +"weeks";
  }
  else if(period_choice=="monthly")
  {
        document.getElementById('result').innerText= total +"months";
  }
  else if(period_choice=="yearly")
  {
    document.getElementById('result').innerText= total +"year";
  }

}

}

$(document).ready(function() {
   $('.h').hide();
  $('#radio2').on("change", function(event){
              $('.h').show();
              document.getElementById('result').innerText="";
        });
  $('#radio1').on("change", function(event){
              $('.h').hide();
              document.getElementById('result').innerText="";
        });
});

