const url = "http://localhost:90/gsb/praticien";


fetch(url + "?ville=Marseille").then(response => response.json()).then((datas) => {
    datas.forEach((element) => {

      console.log(element)

      if(element.adresse === 'Marseille'){
        console.log('praticiens de Marseille ' + element.nom + ' ' + element.adresse + ' ' + element.prenom + ' ' + element.specialite);
      }
      if(element.adresse === 'Paris' && element.specialite === 'Dentiste'){
        console.log('dentiste de paris ' + element.nom + ' ' + element.adresse);
      }
      if(element.isVisite === true){
        console.log('praticiens est visite ' + element.nom + ' ' + element.prenom + ' ' + element.specialite + ' ' + element.isVisite);
      }
      if(element.adresse === 'Mareille' && element.specialite === 'Dentiste' && element.isVisite === true){
        console.log('dentiste de marseille qui ont été visité ' + element.nom + ' ' + element.adresse + ' ' + element.specialite + ' ' + element.isVisite);
      }
  });
});

