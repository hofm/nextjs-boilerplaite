'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const List = () => {
  const [ list, setList ] = useState<{ name: string}[]>([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get('/api/stores');
      setList(response.data);
    }
    fetchData();
  }, []);
  return (
    <div>{list.map((item, idx) => <ul key={idx}>{item.name}</ul>)}</div>
  )
}

export default List;