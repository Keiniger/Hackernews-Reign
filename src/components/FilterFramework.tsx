import React, { useState } from "react";
import { setInLocalStorage, Keys } from "../utils/localStorage";
import dropdown from "../assets/dropdown-icon.svg";
import reactIcon from "../assets/react.jpg";
import angularIcon from "../assets/angular.jpg";
import vueIcon from "../assets/vue.jpg";
import styles from "./FilterFramework.module.css";

export enum FrameworkType {
  React = "React",
  Angular = "Angular",
  Vue = "Vue",
}

const Frameworks = [
  { name: FrameworkType.React, icon: reactIcon },
  { name: FrameworkType.Angular, icon: angularIcon },
  { name: FrameworkType.Vue, icon: vueIcon },
];

interface Props {
  selectedFramework: string;
  setSelectedFramework: (framework: string) => void;
}

export default function FilterFramework({
  selectedFramework,
  setSelectedFramework,
}: Props) {
  const [framework, setFramework] = useState<string>(selectedFramework);
  const [wasSelected, setWasSelected] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleSelected = (selected: string) => {
    setFramework(selected);
    setWasSelected(true);
    setSelectedFramework(selected);

    setInLocalStorage(Keys.Framework, selected);
    console.log(selected);

    if (showMenu) {
      setTimeout(() => {
        toggleMenu();
      }, 100);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.field} onClick={toggleMenu}>
        <span className={styles.text}>
          {wasSelected ? framework : "Select your news"}
        </span>
        <img
          className={`${styles.icon} ${showMenu ? styles.show_icon : ""}`}
          src={dropdown}
          alt="dropdown"
        />
      </div>

      <ul
        className={`${styles.item_container} ${
          showMenu ? styles.show_item : ""
        }`}
        onMouseLeave={toggleMenu}
      >
        {Frameworks.map((fr) => (
          <li
            className={styles.item}
            key={fr.name}
            onClick={() => handleSelected(fr.name)}
          >
            <img src={fr.icon} alt={fr.name}></img>
            <span>{fr.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
