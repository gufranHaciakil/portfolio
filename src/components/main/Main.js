import React, { useState } from "react";
import Container from "../Container";
import Article from "./Article";

const buttons = [
  {
    name: "All Projects",
    class: "all",
  },
  {
    name: "React-ReduxToolkit",
    class: "react",
  },
  {
    name: "Html Css Js",
    class: "html",
  },
  {
    name: "PHP Mysql",
    class: "php",
  },
];
const articles = [
  {
    img: "flower.png",
    name: "Flower",
    category: "React-ReduxToolkit",
    subCategory: "js-mui-nodejs",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    link1: "https://gufi-flowerproject.netlify.app/",
    github: "https://www.google.com",
    more: "",
  },

  {
    img: "miniStore.png",
    name: "Mini Store",
    category: "Html Css Js",
    subCategory: "",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    link1: "https://gufranhaciakil.github.io/my-online-store/",
    github: "https://github.com/gufranHaciakil/my-online-store",
    more: "",
  },
  {
    img: "movies.png",
    name: "Movies",
    category: "React-ReduxToolkit",
    subCategory: "ts-tailwind",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    link1: "https://gufi-movies.netlify.app/",
    github: "https://github.com/gufranHaciakil/movies-project",
    more: "/",
  },
  {
    img: "socialmedia.png",
    name: "Mini Socialmedia",
    category: "Html Css Js",
    subCategory: "",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    link1: "https://minisocialmediya.netlify.app/",
    github: "https://github.com/gufranHaciakil/miniSocialmedia",
    more: "/",
  },
];

const Main = () => {
  const [active, setActive] = useState("");
  const [artcArry, set_artcArry] = useState(articles);

  return (
    <Container>
      <div
        id="articles"
        className="flex flex-col gap-10 items-center justify-center flex-wrap"
      >
        <div className="flex flex-wrap justify-center gap-2">
          {buttons.map((item) => {
            return (
              <button
                onClick={() => {
                  setActive(item.class);
                  let newArr = articles.filter((artic) => {
                    return artic.category === item.name;
                  });
                  if (newArr.length > 0) {
                    set_artcArry(newArr);
                  } else if (item.class === "all") {
                    set_artcArry(articles);
                  } else {
                    set_artcArry([]);
                  }
                }}
                className={`${
                  active === item.class ? "active" : null
                } bg-gray-200 px-5 py-2 rounded-md hover:border-gray-400 border-2 hover:text-black transition-all duration-300`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="w-[] md:w-[] flex gap-3 flex-wrap justify-center">
          <Article artcArry={artcArry} />
        </div>
      </div>
    </Container>
  );
};

export default Main;
