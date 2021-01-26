type ImageSchema = Partial<{
  source: string;
  caption: string;
  author: string;
}>;

const getImageDescription = (imageSourceDetails: ImageSchema): string => {
  const { author, caption, source } = imageSourceDetails;
  const captionValue = caption && `${caption}${!source ? '' : ', '}`;
  const sourceValue = source && `Źródło zdjęć: © ${source}`;
  const authorValue =
    author && `${captionValue || sourceValue ? ` | ${author}` : author}`;

  return [captionValue, sourceValue, authorValue].filter(Boolean).join('');
};

export default getImageDescription;