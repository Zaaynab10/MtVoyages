function intervertirAeroports(event) {
  // Empêcher le comportement par défaut du bouton (rechargement de la page)
  event.preventDefault();

  // Récupérer les éléments select
  var select1 = document.getElementById('select1');
  var select2 = document.getElementById('select2');

  // Récupérer les options
  var optionsSelect1 = Array.from(select1.options);
  var optionsSelect2 = Array.from(select2.options);

  // Effacer les options existantes
  select1.innerHTML = '';
  select2.innerHTML = '';

  // Ajouter les options inversées
  optionsSelect1.forEach(function (option) {
    select2.add(new Option(option.text, option.value));
  });

  optionsSelect2.forEach(function (option) {
    select1.add(new Option(option.text, option.value));
  });
}