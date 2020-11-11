var libro=document.getElementById('libro');
var imglibro=document.getElementById('imglibro');
var bienvenida=document.getElementById('bienvenida');
var flecha=document.getElementById('imgflecha');
var pag1=document.getElementById('pag1');
var imglibroabierto=document.getElementById('imglibroabierto');
var narrador=document.getElementById('narrador');
var bienvenida=function () {
	libro.className="libro";
		pag1.className="bloqueado";
}
var pagina1=function () {
	libro.className="bloqueado";
		pag1.className="pag1";
}