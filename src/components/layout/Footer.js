import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='mt-auto py-3 bg-dark'>
      <p className='text-white text-center mt-5 mb-5 p-5'>
        &copy; 2022 - Curso React Matheus Battisti
      </p>

      <ul className='nav justify-content-center'>
        <li className='nav-item'>
          <Link className='nav-link fs-6' to='/'>
            <FaFacebook className='text-primary' />
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link fs-6' to='/'>
            <FaInstagram className='text-primary' />
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link fs-6'>
            <FaLinkedin className='text-primary' />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
