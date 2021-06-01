import { load } from 'cheerio';
import { isString } from 'lodash';

const HTML_TAGS_REGEX = /(<([^>]+)>)/gi;
const ORPHAN_REGEX = /(\s)([iaouwz])\s+/gmi;

export function getFirstParagraph(html = '') {
  return load(html)('p').first().text();
}

export function stripHtmlTags(html = '') {
  return html.replace(HTML_TAGS_REGEX, '');
}

export function addTargetBlankToAllLinks(html = '') {
  const $ = load(html);
  $('a[href^=http]').each(function () {
    $(this).attr('target', '_blank');
  });
  return $.html();
}

export function fixOrphans(text = '') {
  if (!isString(text)) {
    return text;
  }

  return text.replace(ORPHAN_REGEX, (match, p1, p2) => `${p1}${p2}&nbsp;`);
}
