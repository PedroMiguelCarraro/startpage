function doDate() {
	var str = "";
	var months = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro");
	var clock = new Date();
	var now = new Date();
	str +=  now.getDate() + " " + months[clock.getMonth()] + ", " + clock.getFullYear() + " | " + ("0" + now.getHours()).slice(-2) +":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2);
	document.getElementById("date").innerHTML = str;
}
setInterval(doDate, 1000);
doDate();