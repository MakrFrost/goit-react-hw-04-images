import { Component } from 'react';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';

class Searchbar extends Component {
  state = {
    value: '',
  };

  submitOnForm = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      toast.info('Write field to search for pictures!');
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  onInputChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.submitOnForm} className="search-form">
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
            onChange={this.onInputChange}
            value={this.state.value}
            className="search-form-input"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
