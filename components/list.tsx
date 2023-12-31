'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MarkdownToDom from '@/components/lib/markdownToHtml';

const List = () => {
  const [list, setList] = useState<{ content: string }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/api/news');
      setList(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {list.map((item, idx) => (
        <div key={idx}>
          <MarkdownToDom value={item.content} />
        </div>
      ))}
    </div>
  );
};

export default List;
