import React from 'react';
import { Form } from 'informed';
import { mergeClasses } from '../../classify';
import SearchField from './searchField';
import { useSearchBar } from '../../Hooks/SearchBar/useSearchBar';
import defaultClasses from './searchBar.module.scss';
const Search = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const talonProps = useSearchBar();
  const {
    // containerRef,
    // expanded,
    handleChange,
    handleFocus
    // handleSubmit,
    // initialValues,
    // setExpanded,
    // valid
  } = talonProps;

  return (
    <Form
      autoComplete="off"
      className={classes.root}
      // initialValues={initialValues}
      // onSubmit={handleSubmit}
    >
      <div className={classes.input_group}>
        <SearchField
          onChange={handleChange}
          onFocus={handleFocus}
          classes={{
            input: classes.input
          }}
        />
      </div>
    </Form>
  );
};

export default Search;
