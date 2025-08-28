const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

require('dotenv').config();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:3000', 'http://localhost:3012'],
  credentials: true
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/', function(req, res) {
    res.send('Welcome to BB Tyres API');
})

app.post('/api/forma', async (req,res) => {
    try {
        console.log(req.body)
        let data = req.body
        
        // Validate required fields
        if (!data.name || !data.email || !data.message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        let transporter = nodemailer.createTransport ({
            service:'hotmail',
            port:465,
            auth:{
                user:'msg_bbtyres@outlook.com',
                pass:process.env.REACT_APP_EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        let mailOptions = {
            from: 'msg_bbtyres@outlook.com',
            to: 'contact@blackbulltyres.com',
            subject: `Message from ${data.name}`,
            html:`
            <h3> Informations </h3>
            <ul>
            <li> Name: ${data.name} </li>
            <li> Email: ${data.email} </li>
            <li> Phone Number: ${data.phoneNumber || 'Not provided'} </li>
            </ul>
            
            <h3> Message </h3>
            <p> ${data.message} </p>
            `
        }

        const result = await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Email sent successfully' });
        
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 8080;
app.listen (PORT, ()=>{
    console.log (`Server starting at ${PORT}`)
})