require('dotenv').config();

const { ___ } = require('./src/models'); // On choisit la table à tester à la place des `___`


async function runTests() {
  const all = await ___.findAll(); // On remplace les `___` par le nom de la variable require
  console.log('All tags:', all);
}

// Appel de la fonction de test principale
runTests();