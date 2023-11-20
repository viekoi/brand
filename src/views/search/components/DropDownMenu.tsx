import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./DropDownMenu.module.scss";
import { ICategory } from "../../../common/modal";
import Seperator from "../../../components/seperator/Seperator";

import { Controller } from "react-hook-form";

interface DropDownMenuProps {
  category: ICategory;
  control: any;
  name: string;
}

const DropDownMenu = (props: DropDownMenuProps) => {
  const { category, control, name } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className={styles.content}>
        <div
          className={styles[`menu-title`]}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={styles.title}>{category.name}</span>
          {isOpen ? (
            <ChevronDown size={24} opacity={0.5} />
          ) : (
            <ChevronUp size={24} opacity={0.5} />
          )}
        </div>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <div className={styles.filterRadio}>
              {isOpen && (
                <>
                  {category.subcategories.map((cate) => {
                    return (
                      <label className={styles.item} key={cate.id}>
                        <input type="radio" checked={cate.id === field.value} {...field} value={cate.id} />
                        {cate.name}
                      </label>
                    );
                  })}
                </>
              )}
            </div>
          )}
        />
      </div>
      <Seperator />
    </div>
  );
};

export default DropDownMenu;
