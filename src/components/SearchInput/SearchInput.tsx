import { InputAdornment } from "@mui/material";
import { ChangeEventHandler } from "react";
import { StyledTextField } from "./SearchInput.styled";
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  onChange: ChangeEventHandler<HTMLInputElement>

  icon?: React.ReactElement | null
  label?: string
  id?: string
  testId?: string
};

const SearchInput= ({
  onChange,
  icon = null,
  label,
  id = '',
  testId = '',
}: SearchInputProps) => {
  return (
    <>
      <StyledTextField
        label={label}
        onChange={onChange}
        id={id}
        data-test-id={testId}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        variant="outlined"
      />
    </>
  )
};

export default SearchInput;