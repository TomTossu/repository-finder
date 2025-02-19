'use client';

import { useEffect, useState, useCallback } from 'react';
import Select from './Select.tsx';
import Card from './Card.tsx';
import Header from './Header.tsx';

const Finder = () => {
  const [language, setLanguage] = useState('');
  const [repository, setRepository] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    if (!language) return;

    try {
      const data = await fetch(
        `https://api.github.com/search/repositories?q=${language}`
      ).then((res) => res.json());

      const randomIndex = Math.floor(Math.random() * data.items.length);
      setRepository(data.items[randomIndex]);
      setError(false);
    } catch (err) {
      console.log('Error:', err);
      setRepository(null);
      setError(true);
    }
  }, [language]);

  useEffect(() => {
    fetchData();
  }, [language, fetchData]);

  return (
    <div className='flex flex-col gap-4 mt-10 p-[20px]'>
      <Header />
      <Select setLanguage={setLanguage} />
      <Card
        language={language}
        repository={repository}
        error={error}
        onRefetch={fetchData}
      />
    </div>
  );
};
export default Finder;
