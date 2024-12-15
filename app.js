// Importer les modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');

// Initialiser Express
const app = express();
const port = 3000;

// Middleware pour analyser les données POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir les fichiers statiques (ex: index.html, css, js)
app.use(express.static('public'));

// Définir une route pour afficher le formulaire de réservation
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route pour simuler une réservation d'hôtel
app.post('/reserve', (req, res) => {
    const { name, email, checkin, checkout } = req.body;
    
    // Simuler la réservation (ici, on se contente d'afficher les informations)
    console.log(`Réservation reçue:
      Nom: ${name}
      Email: ${email}
      Check-in: ${checkin}
      Check-out: ${checkout}`);

    // Réponse simulée
    res.send(`<h1>Merci pour votre réservation, ${name}!</h1>
              <p>Nous avons bien reçu votre demande de réservation du ${checkin} au ${checkout}.</p>
              <p>Un email de confirmation a été envoyé à ${email}.</p>`);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

