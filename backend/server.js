const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/routes');
const cors = require('cors'); 

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes); // Prefix the auth routes with /api/auth
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
