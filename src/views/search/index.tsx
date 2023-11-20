import { useState, useEffect } from "react";

import styles from "./Search.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";
import { categories } from "../../utils/static/category";

import Helmet from "../../components/helmet/Helmet";
import DropDownMenu from "./components/DropDownMenu";
import { IProduct } from "../../common/modal";

import ProductList from "../../components/list/ProductList";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomButton from "../../components/base/button/CustomButton";
import { findProductsSearchTerms } from "../../utils/static/product";

type FilterShema = {
  categoryId: string;
  maxPrice: number;
  minPrice: number;
};

const SearchView = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [haveFilters, setHaveFilters] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchTerms = qs.parse(location.search);
  const productsBySearchTerms = findProductsSearchTerms(searchTerms);
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset
  } = useForm<FilterShema>();

  const onSubmit: SubmitHandler<FilterShema> = (data) => {
    const { categoryId, minPrice, maxPrice } = data;
    const params = new URLSearchParams();

    categoryId && params.append("categoryId", categoryId);
    minPrice && params.append("minPrice", minPrice.toString());
    maxPrice && params.append("maxPrice", maxPrice.toString());

    const basePath = "/search";
    const searchQueryPath = `${basePath}?${params.toString()}`;
    navigate(searchQueryPath);
  };

  useEffect(() => {
    setProducts(productsBySearchTerms);
    setIsLoading(false);
    if (location.search === "") {
      setHaveFilters(false);
    } else {
      setHaveFilters(true);
    }

    window.scrollTo(0, 0);
  }, [location.search]);

  return (
    <Helmet title="kết quả tìm kiếm">
      <div className={styles.content}>
        <form className={styles.filter} onSubmit={handleSubmit(onSubmit)}>
          {categories.map((cate) => {
            return (
              <DropDownMenu
                control={control}
                name="categoryId"
                key={cate.id}
                category={cate}
              />
            );
          })}
          <label className={styles[`inputLabel`]}>
            Min price
            <input
              {...register("minPrice", {
                min: 0,
              })}
              placeholder="ex: 5$"
            />
            {errors.minPrice && <span></span>}
          </label>

          <label className={styles[`inputLabel`]}>
            Max price
            <input
              {...register("maxPrice", {
                min: watch("minPrice") > 0 ? watch("minPrice") : 0,
              })}
              placeholder="ex: 10$"
            />
            {errors.maxPrice && (
              <div className={styles[`error-text`]}>
                Min price has to be greater or equal to min price
              </div>
            )}
          </label>
          <CustomButton
            type="submit"
            outline={false}
            height="fit-content"
            padding="10px 20px"
          >
            Submit
          </CustomButton>
        </form>
        <div className={styles.list}>
          <CustomButton
            onClick={() => {
              navigate(`/search`)
              reset()
            }}
            outline={false}
            disable={haveFilters}
            backgroundColor={haveFilters ? `rgb(13, 110, 253)` : `#fcfcfc`}
            padding="2px 4px"
            height="fit-content"
            width="fit-content"
          >
            Clear Filter
          </CustomButton>
          {isLoading ? (
            <>loading</>
          ) : (
            <div className="">
              <ProductList products={products} />
            </div>
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default SearchView;
