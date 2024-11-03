import express from 'express';
import dotenv from 'dotenv';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const OpenAI = require('openai');

dotenv.config();

const router = express.Router();

// Initialize OpenAI with the API key directly
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.get('/', (req, res) => {
    res.send('Hello from SN-I AI');
});

router.post('/', async (req, res) => {
    try {
        const { prompt } = req.body;

        // Call the OpenAI API to generate an image
        const aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',  // Ensure this is correct
        });

        const image = aiResponse.data.data[0].b64_json;  // Access the image data correctly
        res.status(200).json({ photo: image });
    } catch (err) {
        console.error(err);  // Log detailed error for debugging
        res.status(500).send('Something went wrong');  // Simplified error response
    }
});   

export default router;

