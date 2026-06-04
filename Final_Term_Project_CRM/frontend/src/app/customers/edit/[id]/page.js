'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import api from '../../../../utils/api';
import toast, { Toaster } from 'react-hot-toast';

export default function EditCustomer() {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    status: 'Lead', services: '', amount: ''
  });

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const res = await api.get(`/customers/${id}`);
        setForm(res.data);
      } catch { toast.error('Customer not found'); }
    };
    if (id) fetchCustomer();
  }, [id]);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await api.put(`/customers/${id}`, form);
      toast.success('Customer updated!');
      setTimeout(() => router.push('/dashboard'), 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Update failed');
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Edit Customer</h1>
        <Link href="/dashboard" className="bg-white text-blue-700 px-4 py-1 rounded-lg text-sm font-semibold">← Back</Link>
      </nav>
      <div className="max-w-2xl mx-auto mt-8 bg-white rounded-xl shadow p-8">
        <div className="grid grid-cols-2 gap-4">
          {[
            { key: 'name', label: 'Full Name', type: 'text' },
            { key: 'email', label: 'Email', type: 'email' },
            { key: 'phone', label: 'Phone', type: 'text' },
            { key: 'company', label: 'Company', type: 'text' },
            { key: 'amount', label: 'Amount (Rs.)', type: 'number' },
          ].map(f => (
            <div key={f.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
              <input type={f.type}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form[f.key] || ''}
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
            <input type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.services || ''}
              onChange={e => setForm({ ...form, services: e.target.value })}
            />
          </div>
        </div>
        <button onClick={handleUpdate} disabled={loading}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg">
          {loading ? 'Updating...' : 'Update Customer'}
        </button>
      </div>
    </div>
  );
}