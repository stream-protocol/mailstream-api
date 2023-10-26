const express = require('./node_modules/express');
const app = express();
const bodyParser = require('./node_modules/body-parser');
const MailStreamSDK = require('./node_modules/mailstream-sdk');

// Configure middleware to parse JSON requests
app.use(bodyParser.json());

// Initialize MailStream SDK with your credentials
const mailstream = new MailStreamSDK({
    apiKey: 'YOUR_API_KEY', // Replace with your MailStream API key
    apiSecret: 'YOUR_API_SECRET', // Replace with your MailStream API secret
});

// Define a route to send a message
app.post('/send-message', async(req, res) => {
    try {
        // Extract data from the request body
        const { to, subject, message } = req.body;

        // Create a message using the MailStream SDK
        const mailMessage = {
            to,
            subject,
            message,
        };

        // Send the message using the MailStream SDK
        await mailstream.sendMessage(mailMessage);

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});