'use client';
import { useEffect, useState } from 'react';
import { PageData } from './utils/content';

const API_PATH = '/api';

export default function Home() {
  const [content, setContent] = useState<PageData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(API_PATH, {
          headers: {
            Accept: 'application/json',
          },
          method: 'GET',
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setContent(data);
      } catch (error: any) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_PATH]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Here you can render your content if it is not null
  // For example, if content is an object with a `title` field, you could display it like this:
  return (
    <div>
      {content ? (
        <div>
          <h1>{content.page.title}</h1>
          {/* Render other parts of your content here */}
        </div>
      ) : (
        // If content is null, you can render a message or leave it empty
        <p>No content available.</p>
      )}
    </div>
  );
}
