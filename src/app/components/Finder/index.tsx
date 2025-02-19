'use client';

import { useEffect, useState } from 'react';
import Select from './Select.tsx';
import Card from './Card.tsx';
import Header from './Header.tsx';

const Finder = () => {
  const [language, setLanguage] = useState('');
  const [repository, setRepository] = useState([]);

  useEffect(() => {
    if (!language) return;

    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/search/repositories?q=${language}&per_page=1`
      ).then((res) => res.json());

      setRepository(data);
    };

    fetchData();
  }, [language]);

  return (
    <div className='flex flex-col gap-4 mt-10'>
      <Header />
      <Select setLanguage={setLanguage} />
      <Card repository={repository} />
    </div>
  );
};
export default Finder;
