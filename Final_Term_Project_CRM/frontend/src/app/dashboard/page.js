'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '../../utils/api';
import toast, { Toaster } from 'react-hot-toast';

export default function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [user, setUser] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: 'Hi! Commands: "show customers", "add customer", "help"' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { router.push('/'); return; }
    const u = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(u);
    fetchCustomers();
  }, []);

  const fetchCustomers = async (s = '', st = 'All') => {
    try {
      const params = {};
      if (s) params.search = s;
      if (st !== 'All') params.status = st;
      const res = await api.get('/customers', { params });
      setCustomers(res.data);
    } catch {
      toast.error('Failed to load customers');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this customer?')) return;
    try {
      await api.delete(`/customers/${id}`);
      toast.success('Customer deleted!');
      fetchCustomers(search, statusFilter);
    } catch {
      toast.error('Delete failed');
    }
  };

  const handleChat = () => {
    const lower = chatInput.toLowerCase().trim();
    let reply = '';
    if (lower === 'show customers') {
      reply = `You have ${customers.length} customers.`;
    } else if (lower === 'add customer') {
      reply = 'Going to add customer page...';
      setTimeout(() => router.push('/customers/add'), 800);
    } else if (lower === 'help') {
      reply = 'Commands: "show customers", "add customer", "invoice"';
    } else if (lower === 'invoice') {
      reply = 'Click Invoice button on any customer row.';
    } else {
      reply = 'Unknown command. Type "help".';
    }
    setChatMessages(prev => [...prev,
      { from: 'user', text: chatInput },
      { from: 'bot', text: reply }
    ]);
    setChatInput('');
  };

  const statusColor = (s) => {
    if (s === 'Active') return 'bg-green-100 text-green-700';
    if (s === 'Inactive') return 'bg-red-100 text-red-700';
    return 'bg-yellow-100 text-yellow-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      {/* Navbar */}
      <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">CRM Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">Welcome, {user?.name}</span>
          <Link href="/customers/add" className="bg-white text-blue-700 px-4 py-1 rounded-lg text-sm font-semibold hover:bg-blue-50">
            + Add Customer
          </Link>
          <button onClick={() => { localStorage.clear(); router.push('/'); }}
            className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-lg text-sm">
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {['Lead', 'Active', 'Inactive'].map(s => (
            <div key={s} className="bg-white rounded-xl p-4 shadow text-center">
              <p className="text-gray-500 text-sm">{s} Customers</p>
              <p className="text-3xl font-bold text-blue-700">
                {customers.filter(c => c.status === s).length}
              </p>
            </div>
          ))}
        </div>

        {/* Search + Filter */}
        <div className="flex gap-4 mb-4">
          <input
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search by name..."
            value={search}
            onChange={e => { setSearch(e.target.value); fetchCustomers(e.target.value, statusFilter); }}
          />
          <select
            className="border rounded-lg px-4 py-2 focus:outline-none"
            value={statusFilter}
            onChange={e => { setStatusFilter(e.target.value); fetchCustomers(search, e.target.value); }}
          >
            {['All', 'Lead', 'Active', 'Inactive'].map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                {['Name', 'Email', 'Phone', 'Company', 'Status', 'Amount', 'Actions'].map(h => (
                  <th key={h} className="px-4 py-3 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {customers.length === 0 ? (
                <tr><td colSpan="7" className="text-center py-8 text-gray-400">No customers found</td></tr>
              ) : customers.map(c => (
                <tr key={c._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3">{c.email}</td>
                  <td className="px-4 py-3">{c.phone}</td>
                  <td className="px-4 py-3">{c.company}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor(c.status)}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">Rs. {c.amount}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <Link href={`/customers/edit/${c._id}`} className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs hover:bg-blue-200">Edit</Link>
                      <Link href={`/invoice/${c._id}`} className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs hover:bg-green-200">Invoice</Link>
                      <button onClick={() => handleDelete(c._id)} className="bg-red-100 text-red-700 px-3 py-1 rounded text-xs hover:bg-red-200">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6">
        <button onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg text-2xl hover:bg-blue-700">
          💬
        </button>
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-72 bg-white rounded-xl shadow-2xl border">
            <div className="bg-blue-600 text-white p-3 rounded-t-xl font-semibold">CRM Assistant</div>
            <div className="h-48 overflow-y-auto p-3 space-y-2">
              {chatMessages.map((m, i) => (
                <div key={i} className={`text-sm ${m.from === 'user' ? 'text-right' : ''}`}>
                  <span className={`inline-block px-3 py-1 rounded-lg ${m.from === 'user' ? 'bg-blue-100' : 'bg-gray-100 text-blue-700'}`}>
                    {m.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex p-2 gap-2 border-t">
              <input
                className="flex-1 border rounded px-2 text-sm py-1 focus:outline-none"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleChat()}
                placeholder="Type a command..."
              />
              <button onClick={handleChat} className="bg-blue-600 text-white px-3 rounded text-sm">Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}