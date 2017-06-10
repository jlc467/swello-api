module.exports = function toSentenceCase(text) {
  const rg = /(^\w{1}|\.\s*\w{1})/gi;
  return text.toLowerCase().replace(rg, toReplace => {
    return toReplace.toUpperCase();
  });
};
