/* Dernière modification:
 ***** 2021-05-09 *****
 *** Michael Lacroix ***/

import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  // Contient les elements de navigation de premier niveau ( haut ) * Groupe *
  const elementsNavigationUpper = [
    {
      titre: "Stagiaires",
      route: "/stagiaires",
      icon: toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg"),
    },
    {
      titre: "Tuteurs",
      route: "/tuteurs",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg"),
    },
    {
      titre: "Entreprises",
      route: "/entreprises",
      icon: toAbsoluteUrl("/media/svg/icons/Home/Library.svg"),
    },
    {
      titre: "Évaluations",
      route: "#",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
    {
      titre: "Rapports de stage",
      route: "#",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
    {
      titre: "Paramètres du stage",
      route: "#",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
  ];

  // Contient les elements de navigation de deuxième niveaux ( milieu ) * Gestion Globale *
  const elementsNavigationMid = [
    {
      titre: "Calandrier",
      route: "#",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
    {
      titre: "Tâches",
      route: "#",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
    {
      titre: "Entraide",
      route: "#",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
    {
      titre: "Stages",
      route: "#",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
    {
      titre: "Utilisateurs",
      route: "#",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
    {
      titre: "Programmes",
      route: "#",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
  ];

  // Contient les elements de navigation de troisième niveaux ( bas ) * Vous *
  const elementsNavigationBot = [
    {
      titre: "Outils",
      route: "#",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
    {
      titre: "Préférences",
      route: "#",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
    {
      titre: "Déconnexion",
      route: "/logout",
      icon: toAbsoluteUrl("/media/svg/icons/Design/Layers.svg"),
    },
  ];

  return (
    <>
      {/* NAV MENU */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <li className="menu-section ">
          <h4 className="menu-text">Menu</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>

        <li
            className={`menu-item ${getMenuItemActive("/tableau-de-bord-global", false)}`}
            aria-haspopup="true"
            key="2"
          >
        <NavLink className="menu-link" to="/tableau-de-bord-global">
              <span className="svg-icon menu-icon">
                <SVG src="/media/svg/icons/Design/Layers.svg" />
              </span>
              <span className="menu-text">Tableau de bord</span>
        </NavLink>
        </li>

      </ul>
      {/* DÉBUT UPPER NAV */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <li className="menu-section ">
          <h4 className="menu-text">Groupe 1017</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>

        {elementsNavigationUpper.map((element, index) => (
          <li
            className={`menu-item ${getMenuItemActive(element.route, false)}`}
            aria-haspopup="true"
            key={index}
          >
            <NavLink className="menu-link" to={element.route}>
              <span className="svg-icon menu-icon">
                <SVG src={element.icon} />
              </span>
              <span className="menu-text">{element.titre}</span>
            </NavLink>
          </li>
        ))}

        {/********** * FIN UPPER NAV ****************/}

        {/* DÉBUT MID NAV*/}

        <li className="menu-section ">
          <h4 className="menu-text">Gestion globale</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>

        {elementsNavigationMid.map((element, index) => (
          <li
            className={`menu-item ${getMenuItemActive(element.route, false)}`}
            aria-haspopup="true"
            key={index}
          >
            <NavLink className="menu-link" to={element.route}>
              <span className="svg-icon menu-icon">
                <SVG src={element.icon} />
              </span>
              <span className="menu-text">{element.titre}</span>
            </NavLink>
          </li>
        ))}

        {/*********** FIN MID NAV ****************/}

        {/************ DÉBUT BOTTOM NAV ****************/}

        {/*********** FIN BOTTOM NAV ****************/}

        <li className="menu-section ">
          <h4 className="menu-text">Vous</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>

        {elementsNavigationBot.map((element, index) => (
          <li
            className={`menu-item ${getMenuItemActive(element.route, false)}`}
            aria-haspopup="true"
            key={index}
          >
            <NavLink className="menu-link" to={element.route}>
              <span className="svg-icon menu-icon">
                <SVG src={element.icon} />
              </span>
              <span className="menu-text">{element.titre}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* FIN DE LA NAV */}
    </>
  );
}
