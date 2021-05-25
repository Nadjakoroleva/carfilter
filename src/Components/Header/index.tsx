import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='header-container'>
            <h3 id='logo'>BooksSearch</h3>
            <div className='header-content'>
                <nav className='navigation'>
                   <ul>
                       <li>Main</li>
                   </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;