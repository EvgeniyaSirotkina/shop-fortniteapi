const Header = () => {
    return (
        <nav className='orange accent-3'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo right'>React Shop</a>
                <ul id='nav-mobile' className='left hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/EvgeniyaSirotkina?tab=repositories'
                            target='_blank'
                            rel='noreferrer'
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;