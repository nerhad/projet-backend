const url = "http://localhost:90/gsb/praticien";


fetch(url).then(response => response.json()).then((data) => {
    data.forEach((element) => {

      if(element.adresse === 'Marseille') {
        console.log("error");
      }
      else{
        console.log('praticiens de Marseille '+ [element.nom + ' ' + element.adresse + ' ' + element.prenom + ' ' + element.specialite])
      }
      
      if(element.adresse === 'Paris' && element.specialite === 'Dentiste'){
        console.log('error');
      }
      else{
        console.log('dentiste de paris ' + element.nom + ' ' + element.adresse)
      }

      if(element.isVisite === true){
        console.log("error");
      }
      else{
        console.log('praticiens est visite ' + element.nom + ' ' + element.prenom + ' ' + element.specialite + ' ' + element.visite)
      }

      if(element.adresse === 'Mareille' && element.specialite === 'Dentiste' && element.visite === true){
        console.log('error');
      }
      else{
        console.log('dentiste de marseille qui ont été visité ' + element.nom + ' ' + element.adresse + ' ' + element.specialite + ' ' + element.visite);
      }

  });
});

