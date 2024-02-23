import { GetBeerPropertyPipe } from './get-beer-property.pipe';

describe('GetBeerPropertyPipe', () => {
  it('create an instance', () => {
    const pipe = new GetBeerPropertyPipe();
    expect(pipe).toBeTruthy();
  });
});
