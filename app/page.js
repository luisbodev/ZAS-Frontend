'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL +'/hello-world');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Data fetched from API</h1>
      <span>{data.message}</span>
    </div>
  );
};