import React, { useState } from 'react';

interface YearDropdownProps {
  onYearChange: (year: string) => void;
}

const YearDropdown: React.FC<YearDropdownProps> = ({ onYearChange }) => {
  const currentYear = new Date().getFullYear();
  const startYear = 1900;
  const years: string[] = [];
  for (let y = currentYear; y >= startYear; y--) {
    years.push(y.toString());
  }

  // State for the selected year (when the dropdown is not active)
  const [selectedYear, setSelectedYear] = useState<string>('');
  // State for the search term in the input field (when active)
  const [searchTerm, setSearchTerm] = useState<string>('');
  // State to control if the input field (editable mode) is active
  const [editing, setEditing] = useState<boolean>(false);
  // State to control the visibility of the dropdown list
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // Filter the list of years based on the search term
  const filteredYears = years.filter((year) =>
    year.includes(searchTerm)
  );

  // When a year is selected, update the state and notify the parent
  const handleSelect = (year: string) => {
    setSelectedYear(year);
    onYearChange(year);
    // Switch back to the button view
    setEditing(false);
    setShowDropdown(false);
    setSearchTerm('');
  };

  // Reset selection and clear the input
  const handleReset = () => {
    setSelectedYear('');
    onYearChange('');
    setEditing(false);
    setShowDropdown(false);
    setSearchTerm('');
  };

  // Activate editing mode
  const handleButtonClick = () => {
    setEditing(true);
    setShowDropdown(true);
  };

  return (
    <div style={{ position: 'relative', width: '200px' }}>
      {/* Show button view if not editing */}
      {!editing ? (
        <button
          className="btn btn-secondary btn-sm dropdown-toggle dropdown-button"
          type="button"
          onClick={handleButtonClick}
        >
          {selectedYear || "Year"}
        </button>
      ) : (
        // Show input field when editing
        <input
          type="text"
          className="form-control form-control-sm button-inside-search"
          placeholder="Select year"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          // On blur, revert to button view if nothing is selected
          onBlur={() => {
            // Delay to allow selection click to register
            setTimeout(() => {
              if (!selectedYear) {
                setEditing(false);
                setShowDropdown(false);
                setSearchTerm('');
              }
            }, 150);
          }}
          autoFocus
        />
      )}

      {showDropdown && editing && (
        <ul
          className="dropdown-menu show button-inside-dropdown"
          style={{
            maxHeight: '200px',
            overflowY: 'auto',
            width: '100%',
            position: 'absolute',
            zIndex: 1000,
          }}
        >
          {/* Reset option */}
          <li>
            <button
              type="button"
              className="dropdown-item  button-inside"
              onMouseDown={(e) => e.preventDefault()}
              onClick={handleReset}
            >
              Reset
            </button>
          </li>
          {filteredYears.map((year) => (
            <li key={year}>
              <button
                type="button"
                className="dropdown-item  button-inside"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelect(year)}
              >
                {year}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YearDropdown;
