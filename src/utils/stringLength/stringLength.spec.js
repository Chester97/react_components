import { stringLength } from './stringLength';

describe('stringLength', () => {

  it('should return passed string', () => {
    const result = stringLength('foo', 3);

    expect(result).toMatch('foo');
  });

  it('should return alternative string', () => {
    const result = stringLength('foo', 1, 'bar');
    const result2 = stringLength('foo', 1);

    expect(result).toMatch('bar');
    expect(result2).toMatch('Alternative');
  });
});