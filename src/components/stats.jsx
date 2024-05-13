import React from 'react';
import { BsCashCoin, BsCurrencyDollar } from 'react-icons/bs';
import { SiCashapp } from 'react-icons/si';

const data = [
  {
    label: "Your Total Balance",
    amount: "100,020.00",
    increase: 10.9,
    icon: <BsCurrencyDollar size={26} />,
  },
  {
    label: "Total Income",
    amount: "150,010.00",
    icon: <BsCashCoin size={26} />,
    increase: 8.9,
  },
  {
    label: "Total Expense",
    amount: "50,010.00",
    icon: <SiCashapp size={26} />,
    increase: -10.9,
  },
];

const ICON_STYLES = [
  "bg-blue-300 text-blue-800",
  "bg-emerald-300 text-emerald-800",
  "bg-rose-300 text-rose-800",
];

const Stats = () => {
  return (
    <div>Stats</div>
  )
}

export default Stats