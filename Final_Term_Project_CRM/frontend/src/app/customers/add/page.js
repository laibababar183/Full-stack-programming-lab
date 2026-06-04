'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '../../../utils/api';
import toast, { Toaster } from 'react-hot-toast';

export default function AddCustomer() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    status: 'Lead', services: '', amount: ''
  });

  const handleSubmit = async () => {
  if (!form.name || !form.email || !form.phone) {
    toast.error('Name, Email and Phone required!');
    return;
  }
  if (!form.amount || form.amount <= 0) {
    toast.error('Enter Amount!');
    return;
  }
    setLoading(true);
    try {
      await api.post('/customers', form);
      toast.success('Customer added!');
      setTimeout(() => router.push('/dashboard'), 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Add New Customer</h1>
        <Link href="/dashboard" className="bg-white text-blue-700 px-4 py-1 rounded-lg text-sm font-semibold">← Back</Link>
      </nav>
      <div className="max-w-2xl mx-auto mt-8 bg-white rounded-xl shadow p-8">
        <div className="grid grid-cols-2 gap-4">
          {[
            { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Ahmed Ali' },
            { key: 'email', label: 'Email', type: 'email', placeholder: 'ahmed@email.com' },
            { key: 'phone', label: 'Phone', type: 'text', placeholder: '0300-1234567' },
            { key: 'company', label: 'Company', type: 'text', placeholder: 'ABC Pvt Ltd' },
            { key: 'amount', label: 'Amount (Rs.)', type: 'number', placeholder: '50000' },
          ].map(f => (
            <div key={f.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
              <input type={f.type} placeholder={f.placeholder}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form[f.key]}
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
              {['Lead', 'Active', 'Inactive'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Services</label>
            <input type="text" placeholder="Web Development, SEO..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.services}
              onChange={e => setForm({ ...form, services: e.target.value })}
            />
          </div>
        </div>
        <button onClick={handleSubmit} disabled={loading}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
          {loading ? 'Adding...' : 'Add Customer'}
        </button>
      </div>
    </div>
  );
}