import { designService } from '@/services/design.service';

describe('Design service', () => {
  it('kan foo', () => {
    // ARRANGE
    const embedded = false;

    // ACT
    designService.applyDesign(embedded);

    // ASSERT
    expect(true).toEqual(false);
  });
});
