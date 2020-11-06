import React from 'react';
import { func } from 'prop-types';
import { Search as SearchIcon, X as ClearIcon } from 'react-feather';
import { useSearchField } from '../../Hooks/SearchBar/useSearchField';
import Icon from '../Icon';
import TextInput from '../TextInput';
import Trigger from '../Trigger';

const clearIcon = <Icon src={ClearIcon} size={18} />;
const searchIcon = <Icon src={SearchIcon} size={18} />;

const SearchField = (props) => {
  const { onChange, onFocus, classes } = props;
  const { inputRef, resetForm, value } = useSearchField();

  const resetButton = value ? (
    <Trigger action={resetForm}>{clearIcon}</Trigger>
  ) : null;

  return (
    <TextInput
      after={resetButton}
      before={searchIcon}
      field="search_query"
      classes={{
        input: classes.input
      }}
      placeholder="Search Knowledge Base..."
      onFocus={onFocus}
      onValueChange={onChange}
      forwardedRef={inputRef}
    />
  );
};

export default SearchField;

SearchField.propTypes = {
  onChange: func,
  onFocus: func
};
