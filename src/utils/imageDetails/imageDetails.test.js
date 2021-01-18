import imageDetails from "./imageDetails";

describe('imageDetails', () => {

  it('should return full details string', () => {
    const detailsElement = imageDetails({ caption: 'Wyścigi samochodowe', source: 'Github.com', author: 'Jan Nowak' });
    expect(detailsElement).toMatch('Źródło zdjęć: © Github.com | Jan Nowak');
    const detailsElementWithAmp = imageDetails({ caption: 'Wyścigi samochodowe', source: 'Github.com', author: 'Jan Nowak', isAmp: true });
    expect(detailsElementWithAmp).toMatch('Wyścigi samochodowe, Źródło zdjęć: © Github.com | Jan Nowak')
  });

  it('should not pass caption', () => {
    const detailsElement = imageDetails({ source: 'Github.com', author: 'Jan Nowak' });
    expect(detailsElement).toMatch('Źródło zdjęć: © Github.com | Jan Nowak');
    const detailsElementWithAmp = imageDetails({ source: 'Github.com', author: 'Jan Nowak', isAmp: true });
    expect(detailsElementWithAmp).toMatch('Źródło zdjęć: © Github.com | Jan Nowak');
  });

  it('should not pass source', () => {
    const detailsElement = imageDetails({ caption: 'Wyścigi samochodowe', source: 'Github.com', author: 'Jan Nowak' });
    expect(detailsElement).toMatch('Jan Nowak');
    const detailsElementWithAmp = imageDetails({ caption: 'Wyścigi samochodowe', author: 'Jan Nowak', isAmp: true });
    expect(detailsElementWithAmp).toMatch('Wyścigi samochodowe | Jan Nowak');
  });

  it('should not pass author', () => {
    const detailsElement = imageDetails({ caption: 'Wyścigi samochodowe', source: 'Github.com'});
    expect(detailsElement).toMatch('Źródło zdjęć: © Github.com');
    const detailsElementWithAmp = imageDetails({ caption: 'Wyścigi samochodowe', source: 'Github.com', isAmp: true});
    expect(detailsElementWithAmp).toMatch('Wyścigi samochodowe, Źródło zdjęć: © Github.com');
  })

});