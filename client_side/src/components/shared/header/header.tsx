'use client'

import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';


interface NavLink {
  id: number;
  name: string;
  url: string;
}

function Header() {
  // const [searchTerm, setSearchTerm] = useState('');


  // // handling the state of the search bar.
  // const handleSearchState = (event: React.ChangeEvent<HTMLInputElement>) =>{
  //   setSearchTerm(event.target.value);
  // }


  const links: NavLink[] = [
    { id: 1, name: "Home", url: '/' },
    { id: 2, name: "Project", url: '/project' },
    { id: 3, name: "About Us", url: '/about' },
    { id: 4, name: "FAQS", url: '/faqs' },
  ];

  return (
    <header className="container">
      {/* this is supposed to handle the logo the website */}
      <div className='logo'>

      </div>

      {/* this handles the navigation section of the site */}
      <div className='nav-links'>
        {links.map(link => (
          <Link key={link.id} href={link.url}>{link.name}</Link>
        ))}
      </div>
      {/* this is handling the contact section */}

      <div className='contact-us'>
        {/* use the button component and button style to handle this part and also use the extends method to specify more styles for it. */}
      </div>
    </header>
  );
}

export default Header;
