var contatoreLinee = 1;
const numeroLinee = document.getElementById("numeroLinee");
const testo = document.getElementById("testo");

// guarda se è stato salvato il file
if (localStorage.getItem('testo') !== null)
    testo.innerHTML = localStorage.getItem('testo');

function modificaNumeroLinee(numero) {
    
    if (numero > 0) 
        for (let i = 0; i < numero; ++i) 
            numeroLinee.innerHTML += `<span id="linea-${++contatoreLinee}" class="numeroLinea">${contatoreLinee}</span>`
    else if (numero < 0)
        for (let i = 0; i > numero; --i) 
            document.getElementById(`linea-${contatoreLinee--}`).remove();

}

function aggiorna(event) {

    let numeroDiLineeEffettive = testo.innerText.split(/\n\n|\n/).length;
    console.log(numeroDiLineeEffettive + ' - ' + contatoreLinee);

    modificaNumeroLinee(numeroDiLineeEffettive - contatoreLinee);

    localStorage.setItem('testo', testo.innerHTML);

}

document.addEventListener("keydown", function(e) {

    var key = undefined;
    var possible = [ e.key, e.keyIdentifier, e.keyCode, e.which ];

    while (key === undefined && possible.length > 0) key = possible.pop();

    if (key && (key == '115' || key == '83' ) && (e.ctrlKey || e.metaKey) && !(e.altKey)) {

        e.preventDefault();
        
        console.log(testo.innerText);

        saveAs(new Blob([testo.innerText], {type: "text/plain;charset=utf-8"}), `${document.title}.txt`);

        return false;
    
    }
    
    return true;
}); 
