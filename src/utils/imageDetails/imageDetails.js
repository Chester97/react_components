const imageDetails = (value) => {
  const { author, caption, isAmp = false, source } = value;
  const captionValue = (caption && isAmp) && `${caption}${!source ? '' : ', '}`;
  const sourceValue = source && `Źródło zdjęć: © ${source}`;
  const authorValue =  author && `${(captionValue || sourceValue) ? ` | ${author}` : author}`;

  return [captionValue,sourceValue,authorValue].filter(Boolean).join('').trim();
};

export default imageDetails;