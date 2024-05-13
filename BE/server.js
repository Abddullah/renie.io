const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3001;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432,
});

app.get('/products', async (req, res) => {
    const limit = 5;
    const offset = req.query.page ? (parseInt(req.query.page) - 1) * limit : 0;

    try {
        const query = {
            text: 'SELECT * FROM products LIMIT $1 OFFSET $2',
            values: [limit, offset]
        };

        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

// BE CODE
