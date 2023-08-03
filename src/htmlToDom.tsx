import React, { FC } from 'react';
// import createDOMPurify from 'dompurify';
// import { JSDOM } from 'jsdom';

// const window = new JSDOM('').window;
// const DOMPurify = createDOMPurify(window);

interface htmlToDomProps {
  rawHTML: string;
}
// ToDo Use DOMPurify.sanitize(rawHTML) to sanitize the HTML string
const HtmlToDom: FC<htmlToDomProps> = ({ rawHTML }) => {
  return (
    <div className='prose' dangerouslySetInnerHTML={{ __html: rawHTML }} />
  );
};

export default HtmlToDom;
