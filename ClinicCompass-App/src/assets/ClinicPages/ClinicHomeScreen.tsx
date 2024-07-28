import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import './ClinicHomeScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ClinicHomeScreen: React.FC = () => {
     const navigate = useNavigate();

     const handleBookingClick = () => {
       navigate('/booking')
     };

  return (
    <div>
       <h1>Search Results for Soshanguve Clinic</h1>

       <div className='booking-section'>
        <FontAwesomeIcon icon={faCalendarCheck} className="booking-icon" />
        <button onClick={handleBookingClick} className="booking-button">
            Book an Appointment
        </button>
       </div>
    </div>
  )
}

export default ClinicHomeScreen
