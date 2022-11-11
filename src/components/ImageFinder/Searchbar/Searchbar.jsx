import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const submitOnForm = event => {
    event.preventDefault();

    if (value.trim() === '') {
      toast.info('Write field to search for pictures!');
      return;
    }

    onSubmit(value);
    setValue('');
  };
  const onInputChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  return (
    <header className="searchbar">
      <form onSubmit={submitOnForm} className="search-form">
        <button type="submit" className="search-form-button">
          <span className="search-form-button-label">
            <FaSearch />
          </span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onInputChange}
          value={value}
          className="search-form-input"
        />
      </form>
    </header>
  );
}

export default Searchbar;
