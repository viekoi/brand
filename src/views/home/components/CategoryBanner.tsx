import styles from "./CategoryBanner.module.scss";
import { ICategory } from "../../../common/modal";
import { Link } from "react-router-dom";

const CategoryBanner = ({ category }: { category: ICategory }) => {
  return (
    <div className={styles[`category-banner`]}>
      <div
        className={styles[`main-category`]}
        style={{
          backgroundImage: `url(${category.imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <span className={styles[`name`]}>{category.name}</span>
      </div>
      <div className={styles[`sub-categories`]}>
        {category.subcategories.map((cate) => {
          return (
            <Link
              to={`/categories/${cate.id}`}
              className={styles.item}
              key={cate.id}
            >
              <span className={styles.name}>{cate.name}</span>
              <div className={styles.image}>
                <img src={cate.imageUrl} alt="category-img" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBanner;
