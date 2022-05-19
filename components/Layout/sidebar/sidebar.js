import styles from "./sidebar.module.scss";
const Sidebar = () => {
  return (
    <aside className={styles.main}>
      <button>Female Conditions</button>

      <ul>
        <li>Anovulation</li>
        <li>Endometriosis</li>
        <li>Female Age</li>
        <li>Fallopian Tube Blockages</li>
        <li>Luteal Phase Defect</li>
        <li>Implantation Failure</li>
        <li>Immune Conditions</li>
        <li>Genetic Conditions</li>
        <li>Miscarriage</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
