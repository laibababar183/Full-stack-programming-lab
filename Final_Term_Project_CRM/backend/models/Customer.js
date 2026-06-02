const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, default: 'N/A' },
  status: { 
    type: String, 
    enum: ['Lead', 'Active', 'Inactive'], 
    default: 'Lead' 
  },
  services: { type: String, default: '' },
  amount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);