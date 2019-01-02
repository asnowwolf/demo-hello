import { ClassLevelPipe } from './class-level.pipe';

describe('ClassLevelPipe', () => {
  it('create an instance', () => {
    const pipe = new ClassLevelPipe();
    expect(pipe).toBeTruthy();
  });

  it('A 应该显示成头等舱', () => {
    const pipe = new ClassLevelPipe();
    expect(pipe.transform('A')).toEqual('头等舱');
  });
});
