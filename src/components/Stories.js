import React from 'react';
import styled from 'styled-components';

import AppButton from './AppButton';

const Stories = () => {
  return (
    <>
      <SearchForm>
        <input type="text" name="" id=""/>
        <AppButton>Search</AppButton>
      </SearchForm>
    </>
  )
}

const SearchForm = styled.div`
  display: flex;
  margin: 0.5rem;

  & > input {
    flex-grow: 3;
    border: 1px solid #b3b3b3;
    border-right: none;
    border-radius: 6px 0 0 6px;
    padding: 0.5rem;
  }

  & > button {
    border-radius: 0 6px 6px 0;
    width: 10rem;
  }
`

export default Stories;