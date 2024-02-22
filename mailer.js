require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    try {
      console.log('Iniciando o envio de e-mail...');
  
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS
        }
      });
  
      console.log('Transportador criado.');
  
      let mailOptions = {
        from: process.env.GMAIL_USER,
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.message
      };
  
      console.log('Opções de e-mail definidas.');
  
      let info = await transporter.sendMail(mailOptions);
  
      console.log('Email enviado: ' + info.response);
      res.status(200).send('E-mail enviado com sucesso');
    } catch (error) {
      console.log('Erro ao enviar e-mail:');
      console.log(JSON.stringify(error, null, 2));
      res.status(500).send('Ocorreu um erro ao enviar o e-mail');
    }
  });

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});