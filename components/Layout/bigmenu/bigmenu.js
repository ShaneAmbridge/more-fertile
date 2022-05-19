import styles from "./bigmenu.module.scss";

const BigMenu = ({ categories }) => {
  //   console.log(categories.nodes);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {categories.nodes &&
            categories.nodes.map((ob, i) => {
              return (
                ob.name !== "Intro" &&
                ob.name !== "Uncategorized" && (
                  <div key={i + "jd"} className={styles.column}>
                    <h5>{ob.name}</h5>
                    <div className={styles.items}>
                      {ob.children.nodes.length > 0 &&
                        ob.children.nodes.map((item, j) => {
                          return (
                            <div key={j + "jj"} className={styles.item}>
                              {item.name}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BigMenu;
