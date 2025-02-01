'use client';

import { Input } from '../ui/input';

const AdminSearch = () => {
  return (
    <form method='GET'>
      <Input
        type='search'
        placeholder='Search...'
        name='query'
        // value={queryValue}
        // onChange={(e) => setQueryValue(e.target.value)}
        className='md:w-[100px] lg:w-[300px]'
      />
      <button className='sr-only' type='submit'>
        Search
      </button>
    </form>
  );
};

export default AdminSearch;
