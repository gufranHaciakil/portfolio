import React from "react";
import Container from "./Container";

const Footer = () => {
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
      title: "Projects",
      path: "projects",
    },
    {
      title: "Speaking",
      path: "speaking",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col items-center gap-2 md:gap-0 md:flex-row md:justify-between -mt-16">
        <ul className="flex gap-4 text-[11px] md:text-sm">
          {pages.map((item) => {
            return (
              <li className="text-center text-gray-400 hover:text-gray-500">
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <p className="text-gray-400 text-[11px] md:text-sm">
          ώ 2024 Spencer Sharp. All rights reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
