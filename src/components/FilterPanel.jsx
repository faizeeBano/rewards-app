import PropTypes from "prop-types";
import React, { useState } from 'react';

const FilterPanel = React.memo(function FilterPanel({ onFilterChange, months = []}) {
  const [selectedMonth, setSelectedMonth] = useState('ALL');
  const [search, setSearch] = useState('');

  function apply() {
    onFilterChange({ month: selectedMonth, search: search.trim().toLowerCase() });
  }

  return (
    <div className="filter-panel">
      <input
        placeholder="Search customer name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}>
        <option value="ALL">All months</option>
        {months.map(m => <option key={m} value={m}>{m}</option>)}
      </select>
      <button onClick={apply}>Apply</button>
    </div>
  );
});

FilterPanel.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  months: PropTypes.arrayOf(PropTypes.string)
};

export default FilterPanel;
