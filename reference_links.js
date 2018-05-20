var ids = [];
var fullnames = [];
var shortnames = [];
var addresses = [];

ids.push("ricardo");
fullnames.push("Ricardo Ribeiro dos Santos");
shortnames.push("Ricardo Ribeiro dos Santos");
addresses.push('http://lattes.cnpq.br/6970175851174735');

ids.push("nhutho");
fullnames.push("Nhut Tan Ho");
shortnames.push("Nhut Tan Ho");
addresses.push('http://www.csun.edu/~nhuttho/5');

ids.push("sonia");
fullnames.push("Sonia Regina Di Giacomo");
shortnames.push("Sonia Di Giacomo");
addresses.push('http://lattes.cnpq.br/4952834714565263');

ids.push("tamarozzi");
fullnames.push("Antonio Carlos Tamarozzi");
shortnames.push("Antonio Tamarozzi");
addresses.push('http://lattes.cnpq.br/1509581503800531');

ids.push("fernandosouza");
fullnames.push("Fernando Pereira de Souza");
shortnames.push("Fernando de Souza");
addresses.push('http://lattes.cnpq.br/4276784427403123');

ids.push("celsocardoso")
fullnames.push("Celso Cardoso")
shortnames.push("Celso Cardoso")
addresses.push('http://lattes.cnpq.br/5703087217481049')

ids.push("gonda")
fullnames.push("Luciano Gonda")
shortnames.push("Luciano Gonda")
addresses.push('http://lattes.cnpq.br/8386258458220683')

ids.push("thiagopardo")
fullnames.push("Thiago Pardo")
shortnames.push("Thiago Pardo")
addresses.push('http://www.icmc.usp.br/~taspardo')

ids.push("nilc")
fullnames.push("Núcleo Interinstitucional de Linguística Computacional")
shortnames.push("NILC")
addresses.push('http://www.nilc.icmc.usp.br/nilc/index.php')

ids.push("eppc1")
addresses.push('https://www.facebook.com/events/208923909647724/')

ids.push("nilc25")
addresses.push('https://sites.google.com/icmc.usp.br/workshopdonilc-25anos')

ids.push("ufms")
addresses.push('https://www.ufms.br/')

ids.push("lscad")
addresses.push('https://lscad.facom.ufms.br/')

ids.push("uspSC")
addresses.push('http://www.saocarlos.usp.br/')

ids.push("icmc")
addresses.push('https://icmc.usp.br')

ids.push("serl")
addresses.push('http://serl.systems')

ids.push("csun")
addresses.push('https://www.csun.edu')




function updateLinks()
{
    for (n=0; n<ids.length; n++)
    {
    var elems = document.getElementsByClassName(ids[n])
    for (i=0; i<elems.length; i++) 
    {
        text = elems[i].innerHTML
        elems[i].innerHTML = "<a href=" + addresses[n] + ">" + text + "</a>";
    }
    }
}



