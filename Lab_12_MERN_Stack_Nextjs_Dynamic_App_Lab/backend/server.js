const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connect
mongoose.connect('mongodb://232030_db:Test1234@ac-norz1mf-shard-00-00.wl88y1l.mongodb.net:27017,ac-norz1mf-shard-00-01.wl88y1l.mongodb.net:27017,ac-norz1mf-shard-00-02.wl88y1l.mongodb.net:27017/rustikplank?ssl=true&replicaSet=atlas-ob8cvk-shard-0&authSource=admin&appName=Cluster0', {
  serverSelectionTimeoutMS: 30000,
  family: 4
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.log('❌ MongoDB Error:', err));

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  isFeatured: Boolean,
  isSpecial: Boolean,
  isPopular: Boolean,
});

const Product = mongoose.model('Product', productSchema);

// Routes
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

app.delete('/api/products/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

// Seed sample data
app.post('/api/seed', async (req, res) => {
  await Product.deleteMany();
  const products = [
    { name: 'Wooden Chair', description: 'Handcrafted wooden chair', price: 134.99, category: 'CHAIRS', image: '/chair.jpg', isFeatured: true, isSpecial: false, isPopular: true },
    { name: 'Oak Bed Frame', description: 'Reclaimed oak bed frame', price: 299.99, category: 'BEDS', image: '/bed.jpg', isFeatured: false, isSpecial: true, isPopular: true },
    { name: 'Bookcase Elite', description: 'Elegant wooden bookcase', price: 189.99, category: 'BOOKCASES', image: '/bookcase.jpg', isFeatured: true, isSpecial: true, isPopular: false },
    { name: 'Cabinet Classic', description: 'Hand crafted cabinet', price: 249.99, category: 'CABINETS', image: '/cabinet.jpg', isFeatured: false, isSpecial: false, isPopular: true },
    { name: 'Dining Table', description: 'Rustic dining table', price: 399.99, category: 'TABLES', image: '/table.jpg', isFeatured: true, isSpecial: true, isPopular: true },
    { name: 'Storage Box', description: 'Wooden storage box', price: 79.99, category: 'BOXES', image: '/box.jpg', isFeatured: false, isSpecial: true, isPopular: false },
  ];
  await Product.insertMany(products);
  res.json({ message: '✅ Seeded!' });
});

app.listen(5000, () => console.log('🚀 Server running on port 5000'));