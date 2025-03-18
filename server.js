import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index.ejs', { page: 'login' });
});

app.get('/createAccount', (req, res) => {
    res.render('createAccount.ejs', { page: 'createAccount' });
});

app.get('/dashboard', (req,res) =>{
    res.render('dashboard.ejs',{ page: 'dashboard' });
});

app.get('/inventory', (req, res) => {
    res.render('inventory.ejs', { page: 'inventory' });
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