'use client'
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Login from '@/components/LoginForm';

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL +'/hello-world');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);
  // return (
  //   <div>
  //     <h1>Data fetched from API</h1>
  //     <span>{data.message}</span>
  //   </div>
  // );

  if (isLoading) return <LoadingScreen />;

  return <Login />;

};