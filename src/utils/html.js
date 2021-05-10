import { load } from 'cheerio';

const HTML_TAGS_REGEX = /(<([^>]+)>)/gi;

export function getFirstParagraph(html = '') {
  return load(html)('p').first().text();
}

export function stripHtmlTags(html = '') {
  return html.replace(HTML_TAGS_REGEX, '');
}
