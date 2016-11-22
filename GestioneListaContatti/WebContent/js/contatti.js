/**
 * 
 */

function Contatto(nome,cognome,numero,mail){
	
	this.nome=nome;
	this.cognome=cognome;
	this.numero=numero;
	this.mail=mail;
}
var contatti=[];
function addContatto(Contatto){
	contatti.push(newContatto());
}
function newContatto(){
	var nome=document.getElementById("nome");
	var cognome=document.getElementById("cognome");
	var numero=document.getElementById("numero");
	var mail=document.getElementById("mail");
	return Contatto(nome.value,cognome.value,numero.value,mail.value);
}


function addLine(){
  var table = document.getElementById("table");
  //valori inseriti presi
  var xnome=document.getElementById("nome").value;
  var xcognome=document.getElementById("cognome").value;
  var xnumero=document.getElementById("numero").value;
  var xmail=document.getElementById("mail").value;
 //inserisco riga nella tabella con javascript		  		    
  var row = table.insertRow(1);
  var nome = row.insertCell(0);
  var cognome= row.insertCell(1);
  var numero= row.insertCell(2);
  var mail=row.insertCell(3);
  var del=row.insertCell(4);

  //creo bottone delete
  var btn = document.createElement("input");
  btn.type="button";
  btn.id="canc";
  btn.value = "cancella";
  btn.onclick= function cancella() {
	    var i = this.parentNode.parentNode.rowIndex;
	    document.getElementById("table").deleteRow(i);
	}
  
  
//riempio le celle con i valori
  nome.innerHTML = xnome;
  cognome.innerHTML = xcognome;
  numero.innerHTML= xnumero;
  mail.innerHTML= xmail;
  del.appendChild(btn);

  
}

function resetValori(){
	document.getElementById("nome").value="";
	document.getElementById("cognome").value="";
	document.getElementById("numero").value="";
	document.getElementById("mail").value="";
}
