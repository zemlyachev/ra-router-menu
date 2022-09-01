import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Menu({ routes }) {
  return (
    <nav className="menu">
      {routes.map((route, i) => {
        return (
          <NavLink to={route.path} className="menu__item" key={i}>
            {route.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

Menu.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menu;
