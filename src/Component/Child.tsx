import React from 'react';
import { useQuery } from 'react-query';

const Child = () => {
  const { isLoading, data } = useQuery(
    'users',
    async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      return res.json();
    },
    {
      cacheTime: 3000,
    }
  );

  console.log(data);

  return (
    <>
      <h2>{isLoading ? 'Loading' : ''}</h2>
    </>
  );
};

export default Child;
