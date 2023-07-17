/* El BA de su start-up le ha dicho al marketing que su sitio web tiene una gran audiencia en Escandinavia y los países vecinos. Marketing cree que sería genial dar la bienvenida a los visitantes al sitio en su propio idioma. Afortunadamente, ya utiliza una API que detecta la ubicación del usuario, por lo que esta es una victoria fácil.

La tarea
Piense en una forma de almacenar los idiomas como una base de datos (por ejemplo, un objeto). ¡Los idiomas se enumeran a continuación para que pueda copiar y pegar!
Escriba una función de "bienvenida" que tome un parámetro "idioma" (siempre una cadena) y devuelva un saludo, si lo tiene en su base de datos. Debe utilizar el inglés de forma predeterminada si el idioma no está en la base de datos o en caso de una entrada no válida.
La base de datos
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso' */

const greetings = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

const greet = (language) => {
  if (greetings[language]) {
    return greetings[language];
  } else {
    return greetings["english"];
  }
};
