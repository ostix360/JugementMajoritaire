function onClick() {
	
	const NoteTC = document.getElementById("NoteTC").value;
	const NoteBS = document.getElementById("NoteBS").value;
	const NoteHA = document.getElementById("NoteHA").value;
	const NoteSS = document.getElementById("NoteSS").value;
	const NoteRR = document.getElementById("NoteRR").value;
	const NoteCL = document.getElementById("NoteCL").value;
	const NoteJJ = document.getElementById("NoteJJ").value;
	
	const psw = document.getElementById("psw").value;

	const data = { NoteTC, NoteBS, NoteHA, NoteSS, NoteRR, NoteCL, NoteJJ, psw};
    const option = {
		method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/send', option);
	
	console.log(NoteTC + " " + NoteBS + " " + NoteHA + " " + NoteSS + " " + NoteRR + " " + NoteCL + " " + NoteJJ + " " + psw);
	alert("Merci d'avoir voté, veuilliez maintenant envoyer " + psw + " à Victor Robin sur l'ent pour que le vote soit pris en compte");
}