import { ChangeEventHandler, useMemo, useState } from "react";
import _ from 'lodash';

import { SearchInput } from "../../components/SearchInput";
import { SearchPageContainer } from "./search.styled";
import { searchByQuery } from "../../lib/services/searchServices";
import { ImageGallery } from "../../components/ImageGallery";

const SearchPage = () => {
  const [results, setResults] = useState<string[]>([]);
  const onChange: ChangeEventHandler<HTMLInputElement>  = (e) => {
    searchByQuery(e.target.value)
      .then(((results: string[]) => {
        setResults(results);
      }));
  }

  const debouncedOnChange: ChangeEventHandler<HTMLInputElement>  = useMemo(() => _.debounce(onChange, 300), []);

  return (
    <>
      <SearchPageContainer>
        <SearchInput 
          onChange={debouncedOnChange}
          label="search"
          id="search-box"
        />
        <ImageGallery
          urls={results}
        />
      </SearchPageContainer>
    </>
  );
};

export default SearchPage;