const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques depuis le dossier 'public'
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Portfolio en ligne sur http://localhost:${port}`);
});
    