import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Correctly use express.json()

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes); // Ensure this is the correct route

app.get('/', async (req, res) => {
    res.send('Hello from SN-I AI');
});   

const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(8080, () => {
            console.log('Server is running on port http://localhost:8080');
        });
    } catch (err) {
        console.error(err);
    }
};

startServer();
