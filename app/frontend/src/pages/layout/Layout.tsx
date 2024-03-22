import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <a href="https://www.whiterockcity.ca/" target="_blank" title="City of White Rock">
                        <img src="https://whiterock.maps.arcgis.com/sharing/rest/content/items/14911c0ffb634cae9db96dae49c9584f/data" alt="" />
                    </a>
                    <h2 className={styles.headerTitle}>&nbsp;&nbsp;City Regulations Chatbot </h2>

                    {/*<nav>
                    <ul className={styles.headerNavList}>
                       <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                            Chat
                        </NavLink>
                    </li>
                    <li className={styles.headerNavLeftMargin}>
                        <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                            Ask a question
                        </NavLink>
                    </li>
                    <li className={styles.headerNavLeftMargin}>
                        <a href="https://aka.ms/entgptsearch" target={"_blank"} title="Github repository link">
                            <img
                                src={github}
                                alt="Github logo"
                                aria-label="Link to github repository"
                                width="20px"
                                height="20px"
                                className={styles.githubLogo}
                            />
                        </a>
                    </li>
                    </ul>
                </nav>*/}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
