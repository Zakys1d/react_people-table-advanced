import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { pathname } = useLocation();

  const isHomePage = pathname === '/';
  const isPeoplePage =
    pathname === '/people' || pathname.startsWith('/people/');

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={`navbar-item ${
              isHomePage ? 'has-background-grey-lighter' : ''
            }`}
          >
            Home
          </Link>

          <Link
            to="/people"
            className={`navbar-item ${
              isPeoplePage ? 'has-background-grey-lighter' : ''
            }`}
          >
            People
          </Link>
        </div>
      </div>
    </nav>
  );
};
