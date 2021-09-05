export function getUntilNewline(text = '') {
  const idx = text.indexOf('\n');
  if (idx === -1) {
    return text;
  }
  return text.substring(0, idx);
}
