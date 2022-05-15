import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid me-auto">
            <footer className="row row-cols-5 py-5 my-5 border-top">
                <div className="col">
                    <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                        
                    </a>
                    <p className="text-muted">&copy; 2021</p>
                </div>

                

                <div className="col">
                    <h5>Menu</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Home</a></li>
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Features</a></li>
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Books Lover</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Amazon</a></li>
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Rokomari</a></li>
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Book bazer</a></li>
                       
                    </ul>
                </div>

                <div className="col">
                    <h5>Online Free Books</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Pdf</a></li>
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Kindle File</a></li>
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Bangla Books</a></li>
                        <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Apps</a></li>
                        
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;