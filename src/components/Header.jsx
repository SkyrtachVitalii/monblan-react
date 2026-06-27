import logo from '../assets/images/logo.svg';
import DateField from './DateField.jsx';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src={logo}
          width="138"
          height="138"
          alt="monblanproject logo"
        />

        <div className="header__content">
          <div className="header__title-row">
            <h1 className="header__title">monblanproject</h1>
            <button type="button" className="header__badge">
              Start on 17-02-2016
            </button>
          </div>

          <ul className="header__stats">
            <li className="header__stat">
              <strong className="header__stat-value">870</strong> posts
            </li>
            <li className="header__stat">
              <strong className="header__stat-value">11,787</strong> followers
            </li>
            <li className="header__stat">
              <strong className="header__stat-value">112</strong> following
            </li>
          </ul>

          <div className="header__dates">
            <span className="header__dates-label">Date</span>

            <DateField id="date-from" placeholder="from" />
            <DateField id="date-to" placeholder="to" />
          </div>
        </div>
      </div>
    </header>
  );
}

export function ViewSwitcher({ viewMode, onViewChange }) {
  return (
    <div className="view-switcher">
      <button
        type="button"
        className={`view-switcher__btn view-switcher__btn--tiles${
          viewMode === 'tiles' ? ' view-switcher__btn--active' : ''
        }`}
        data-view="tiles"
        aria-label="Tiles view"
        aria-pressed={viewMode === 'tiles' ? 'true' : 'false'}
        onClick={() => onViewChange('tiles')}
      ></button>
      <button
        type="button"
        className={`view-switcher__btn view-switcher__btn--rows${
          viewMode === 'rows' ? ' view-switcher__btn--active' : ''
        }`}
        data-view="rows"
        aria-label="Rows view"
        aria-pressed={viewMode === 'rows' ? 'true' : 'false'}
        onClick={() => onViewChange('rows')}
      ></button>
    </div>
  );
}

export default Header;
