function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var persons = [];

  for (var i = 0; i < 20; i++) {
    persons.push(generatePerson());
  }
  
  console.log(persons);
  
  function displayPersonsInTable(persons) {
    var table = "<table><thead><tr><th>Imię</th><th>Nazwisko</th><th>Wiek</th><th>Telefon</th></tr></thead><tbody>";
    for (var i = 0; i < persons.length; i++) {
      table += "<tr><td>" + persons[i].name + "</td><td>" + persons[i].surname + "</td><td>" + persons[i].age + "</td><td>" + persons[i].phone + "</td></tr>";
    }
    table += "</tbody></table>";
    document.getElementById("personsTable").innerHTML = table;
  }
  
  var numRecords = parseInt(prompt("Podaj liczbę rekordów do wyświetlenia:", "20"));
  
  var personsToShow = [];
  for (var i = 0; i < numRecords; i++) {
    personsToShow.push(generatePerson());
  }
  displayPersonsInTable(personsToShow);  