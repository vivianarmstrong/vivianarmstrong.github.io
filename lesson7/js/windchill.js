const temp = parseFloat(document.getElementById('temp').textContent);
const ws = parseFloat(document.getElementById('ws').textContent);

let wc = windChill(temp, s) 
	if (temp <= 50 && s > 3) {
		let windChill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * temp * Math.pow(ws, 0.16))).toFixed(1);
		document.getElementById('windChill').textContent = windChill + "&#176;F";
	} else {
		document.getElementById('windChill').textContent = "N/A";
	}