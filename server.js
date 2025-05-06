const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques depuis le dossier 'public'
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Portfolio en ligne sur http://localhost:${port}`);
});
    

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ton.email@gmail.com',
      pass: 'ton_mdp_app' // mot de passe d'application (pas le vrai mdp)
    }
  });

  const mailOptions = {
    from: email,
    to: 'ton.email@gmail.com',
    subject: `Message de ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
