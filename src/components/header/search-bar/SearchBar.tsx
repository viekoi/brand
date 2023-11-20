import Button from "react-bootstrap/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./SearchBar.module.scss";

type searchValidateShema = {
  search: string;
};

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearchSubmit: SubmitHandler<searchValidateShema> = (data) => {
    const params = new URLSearchParams();
    if (data.search !== "") {
      params.append("name", data.search.replace(/[^a-zA-Z ]/g, ""));
    }
    const basePath = "/search";
    const searchQueryPath = `${basePath}?${params.toString()}`;
    navigate(searchQueryPath);
  };

  const { register, handleSubmit } = useForm<searchValidateShema>();

  return (
    <form
      onSubmit={handleSubmit(handleSearchSubmit)}
      className={styles[`search-form`]}
    >
      <input
        {...register("search")}
        className={styles[`search-input`]}
        type="search"
        placeholder="Search"
      />
      <Button className={styles[`search-button`]} type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
