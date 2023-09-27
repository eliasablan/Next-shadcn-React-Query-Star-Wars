import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <p className={`mt-10 text-xs text-center ${styles.footer}`}>
      This application was created by{" "}
      <a href="https://github.com/eliasablan" target="_blank">
        <span className="text-white hover:underline">Elias Ablan</span>
      </a>
      . Data for this application is sourced from{" "}
      <a href="https://swapi.dev/" target="_blank">
        <span className="text-white hover:underline">SWAPI</span>
      </a>
      .
    </p>
  );
};

export default Footer;
