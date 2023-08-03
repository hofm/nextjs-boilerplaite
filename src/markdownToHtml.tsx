import React, { FC } from 'react';
import HtmlToDom from './htmlToDom';
import showdown from 'showdown';

interface MarkdownToDomProps {
  value: string;
}

const markdownToHtmlConverter = (value: string) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(value);
};

const MarkdownToDom: FC<MarkdownToDomProps> = ({ value }) => {
  return <HtmlToDom rawHTML={markdownToHtmlConverter(value)} />;
};

export default MarkdownToDom;
