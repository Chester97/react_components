import getImageDescription from './getImageDescription';

describe('getImageDescription', () => {
  it('should return full details string', () => {
    const detailsElement = getImageDescription({
      caption: 'Wyścigi samochodowe',
      source: 'Github.com',
      author: 'Jan Nowak',
    });
    expect(detailsElement).toMatch(
      'Wyścigi samochodowe, Źródło zdjęć: © Github.com | Jan Nowak',
    );
  });

  it('should return empty string', () => {
    const detailsElement = getImageDescription({});
    expect(detailsElement).toMatch('');
  });

  it('should not pass caption', () => {
    const detailsElement = getImageDescription({
      source: 'Github.com',
      author: 'Jan Nowak',
    });
    expect(detailsElement).toMatch('Źródło zdjęć: © Github.com | Jan Nowak');
  });

  it('should not pass source', () => {
    const detailsElement = getImageDescription({
      caption: 'Wyścigi samochodowe',
      author: 'Jan Nowak',
    });
    expect(detailsElement).toMatch('Wyścigi samochodowe | Jan Nowak');
  });

  it('should not pass author', () => {
    const detailsElement = getImageDescription({
      caption: 'Wyścigi samochodowe',
      source: 'Github.com',
    });
    expect(detailsElement).toMatch(
      'Wyścigi samochodowe, Źródło zdjęć: © Github.com',
    );
  });
});
