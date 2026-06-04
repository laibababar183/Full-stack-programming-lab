'use client';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import api from '../../../utils/api';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function InvoicePage() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const invoiceRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(`/customers/${id}`);
      setCustomer(res.data);
    };
    if (id) fetchData();
  }, [id]);

  const downloadPDF = async () => {
    try {
      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: false,
        logging: false,
        onclone: (clonedDoc) => {
          const styles = clonedDoc.querySelectorAll('link[rel="stylesheet"], style');
          styles.forEach(s => s.remove());
        }
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Invoice-${customer?.name}.pdf`);
      alert('PDF ready to download, click OK!');
    } catch (err) {
      console.error('PDF Error:', err);
      alert('Error: ' + err.message);
    }
  };

  if (!customer) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Loading invoice...</p>
    </div>
  );

  const tax = customer.amount * 0.05;
  const total = customer.amount + tax;
  const today = new Date().toLocaleDateString('en-PK');
  const invoiceNo = `INV-${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-3 mb-4">
          <Link href="/dashboard" className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm">
            ← Dashboard
          </Link>
          <button
            onClick={downloadPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold"
          >
            Download PDF
          </button>
        </div>

        <div ref={invoiceRef} style={{backgroundColor: 'white', padding: '32px', borderRadius: '12px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '32px'}}>
            <div>
              <h1 style={{fontSize: '28px', fontWeight: 'bold', color: '#1d4ed8'}}>CRM System</h1>
              <p style={{color: '#6b7280', fontSize: '14px'}}>Air University, Islamabad</p>
              <p style={{color: '#6b7280', fontSize: '14px'}}>info@crmsystem.pk</p>
            </div>
            <div style={{textAlign: 'right'}}>
              <h2 style={{fontSize: '24px', fontWeight: 'bold', color: '#374151'}}>INVOICE</h2>
              <p style={{color: '#6b7280', fontSize: '14px'}}>#{invoiceNo}</p>
              <p style={{color: '#6b7280', fontSize: '14px'}}>Date: {today}</p>
            </div>
          </div>

          <div style={{backgroundColor: '#f9fafb', borderRadius: '8px', padding: '16px', marginBottom: '24px'}}>
            <h3 style={{fontWeight: '600', color: '#374151', marginBottom: '8px'}}>Bill To:</h3>
            <p style={{fontWeight: 'bold', color: '#111827'}}>{customer.name}</p>
            <p style={{color: '#6b7280'}}>{customer.email}</p>
            <p style={{color: '#6b7280'}}>{customer.phone}</p>
            <p style={{color: '#6b7280'}}>{customer.company}</p>
          </div>

          <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: '24px'}}>
            <thead>
              <tr style={{backgroundColor: '#2563eb', color: 'white'}}>
                <th style={{padding: '10px 16px', textAlign: 'left'}}>Service</th>
                <th style={{padding: '10px 16px', textAlign: 'left'}}>Status</th>
                <th style={{padding: '10px 16px', textAlign: 'right'}}>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                <td style={{padding: '12px 16px'}}>{customer.services || 'General Service'}</td>
                <td style={{padding: '12px 16px'}}>
                  <span style={{backgroundColor: '#d1fae5', color: '#065f46', padding: '2px 8px', borderRadius: '9999px', fontSize: '12px'}}>
                    {customer.status}
                  </span>
                </td>
                <td style={{padding: '12px 16px', textAlign: 'right'}}>Rs. {customer.amount?.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>

          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div style={{width: '256px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', color: '#6b7280', marginBottom: '8px'}}>
                <span>Subtotal:</span>
                <span>Rs. {customer.amount?.toLocaleString()}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', color: '#6b7280', marginBottom: '8px'}}>
                <span>Tax (5%):</span>
                <span>Rs. {tax.toFixed(0)}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px', borderTop: '1px solid #e5e7eb', paddingTop: '8px'}}>
                <span>Total:</span>
                <span style={{color: '#1d4ed8'}}>Rs. {total.toFixed(0)}</span>
              </div>
            </div>
          </div>

          <div style={{marginTop: '32px', paddingTop: '16px', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#9ca3af', fontSize: '14px'}}>
            <p>Thank you for your business! — CRM System, Air University</p>
          </div>
        </div>
      </div>
    </div>
  );
}