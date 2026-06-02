const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const protect = require('../middleware/authMiddleware');

// GET /api/customers — Sab customers (search + filter bhi)
router.get('/', protect, async (req, res) => {
  try {
    const { search, status } = req.query;
    let filter = {};
    
    if (search) {
      filter.name = { $regex: search, $options: 'i' }; // case insensitive
    }
    if (status && status !== 'All') {
      filter.status = status;
    }
    
    const customers = await Customer.find(filter).sort({ createdAt: -1 });
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/customers/:id — Ek customer
router.get('/:id', protect, async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/customers — Naya customer add karo
router.post('/', protect, async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/customers/:id — Update karo
router.put('/:id', protect, async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/customers/:id — Delete karo
router.delete('/:id', protect, async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json({ message: 'Customer deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;