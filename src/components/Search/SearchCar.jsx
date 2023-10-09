import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';

//react-icons/cg/CgSearch

const SearchBox = styled.div`
  width: 80%;
  height: 50px;
  background-color: #dbdfea;
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  background-color: #dbdfea;
  font-family: 'pretendard-regular';
  font-size: 18px;
`;

const SearchCar = ({ value, setValue }) => {
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <SearchBox>
      <CgSearch
        style={{ width: '24px', height: '24px', marginRight: '10px' }}
      />
      <SearchInput
        value={value}
        onChange={handleInputChange}
        placeholder="Search for your car..."
      />
    </SearchBox>
  );
};

export default SearchCar;
