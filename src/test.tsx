'use client'

import React from 'react'
import axios from 'axios';

import { Button } from "@/components/ui/button"

const Test = ({  }) => {
    const onPost = async () => {
        const response = await axios.post('/api/stores', { name: 'Markus Hofmann' });
        console.log(response);
      };
  return (
    
    <Button variant="outline" onClick={onPost}>Button</Button>
  )
}

export default Test;