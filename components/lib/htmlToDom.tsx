import React, { FC } from 'react';
import * as DOMPurify from 'dompurify';

interface htmlToDomProps {
  rawHTML: string;
}

const HtmlToDom: FC<htmlToDomProps> = ({ rawHTML }) => {
  return (
    <div
      className='prose'
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }}
    />
  );
};

export default HtmlToDom;
