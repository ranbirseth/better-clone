"use client";
import React, { useState } from 'react';
import '../../component/style.css';
import Navbar from '@/Component/Nav';

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure) * 12;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emi.toFixed(2));
  };

  return (
    <><Navbar/>
    
    </>
  );
};

export default MortgageCalculator;
