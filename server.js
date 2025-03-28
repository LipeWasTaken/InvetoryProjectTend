import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "InventoryManager",
    password: "3Bananerouge",
    port: 5433,
});

db.connect();
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function fetchItems() {
    const res = await db.query("SELECT * FROM items");
    let items = [];
    res.rows.forEach((row) => {
        items.push({
            id: row.id,
            name: row.product_name, 
            category: row.category, 
            quantity: row.qty, 
            price: row.price, 
        });
    }); 
    console.log(items);
    return items; 
}






/*---------------- END POINTS ----------------*/
app.get('/', (req, res) => {
    res.render('index.ejs', { page: 'login' });
});

app.get('/createAccount', (req, res) => {
    res.render('createAccount.ejs', { page: 'createAccount' });
});

app.get('/dashboard', (req,res) =>{
    res.render('dashboard.ejs',{ page: 'dashboard' });
});

app.get('/inventory', async (req, res) => {
    try {
        const items = await fetchItems(); 
        res.render('inventory.ejs', { page: 'inventory', items }); 
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).send("An error occurred while fetching inventory items.");
    }
});

app.get('/sales', (req, res) => {
    res.render('sales.ejs', { page: 'sales' });
});

app.get('/expenses', (req, res) => {
    res.render('expenses.ejs', { page: 'expenses' });
});

app.get('/settings', (req, res) => {
    res.render('settings.ejs', { page: 'settings' });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });