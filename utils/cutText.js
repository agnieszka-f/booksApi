module.exports = (content, maxLength) => {
  if(typeof content !== 'string' || content.length < 1 || typeof maxLength !== 'number' || maxLength <= 0) return 'Error';
  if(content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
