import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

const Header = () => {
  const pages = [
    {
      title: "About",
      path: "about",
    },
    {
      title: "Articles",
      path: "articles",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  return (
    <Navbar
      fluid
      rounded
      className="max-w-56 md:rounded-full shadow-lg mx-auto "
    >
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="block md:hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Hi
        </span>
      </NavbarBrand>
      <NavbarToggle className="" />
      <NavbarCollapse className="x">
        {pages.map((item) => {
          return (
            <a
              className="navLink mb-3 md:mb-0 text-gray-700"
              href={`#${item.path}`}
            >
              {item.title}
            </a>
          );
        })}
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
