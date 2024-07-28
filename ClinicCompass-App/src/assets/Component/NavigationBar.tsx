import React, { KeyboardEvent, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from "react-router-dom";
import './NavigationBar.css'
import logo from './Logo.jpg'


const NavigationBar: React.FC = () =>{
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      if(searchTerm.toLowerCase() === 'soshanguve clinic') {
        navigate('/search')
      }
    }
  }
    return (
     <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span className="system-name">ClinicCompass</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link  to="/signout">SignOut</Link></li>
      </ul>
      <div className="navbar-search">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
         <input 
             type="text" 
             placeholder="Search..." 
             value={searchTerm} 
             onChange={(e) => setSearchTerm(e.target.value)} 
             onKeyDown={handleSearch}
             />
      </div>
     </nav>

    );
};

export default NavigationBar;