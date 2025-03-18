import styles from "../Header/Header.module.css";

function List({ link, title }) {
     return (
          <li>
               <a href={link}>{title}</a>
          </li>
     );
}

export default function Header() {
     return (
          <header>
               <nav>
                    <p>Nakyoung's Portfolio</p>
                    <ul className={styles.header_list}>
                         <List link="#about" title="About" />
                         <List link="#skills" title="Skills" />
                         <List link="#projects" title="Projects" />
                    </ul>
               </nav>
          </header>
     );
}
