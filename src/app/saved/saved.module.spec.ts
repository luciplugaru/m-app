import { SavedModule } from './saved.module';

describe('SavedModule', () => {
  let savedModule: SavedModule;
  
  beforeEach(() => {
    savedModule = new SavedModule();
  });
  
  it('should create an instance', () => {
    expect(savedModule).toBeTruthy();
  });
});
