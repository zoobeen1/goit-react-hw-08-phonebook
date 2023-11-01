import { Box } from '../common';
export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contact by name
      <Box
        as="input"
        mt={2}
        p={2}
        border="normal"
        borderRadius="normal"
        width="100%"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        placeholder="Find contact by name"
      />
    </label>
  );
};
