import './styles.css';

import React from 'react';

type Props = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

function SalesSummaryCard({ value, label, icon }: Props) {
  return (
    <div className="base-card sales-summary-card">
      {icon}
      <h3 className="sales-summary-card-value">{value}</h3>
      <span className="sales-summary-card-label">{label}</span>
    </div>
  );
}

export default SalesSummaryCard;
