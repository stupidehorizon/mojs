describe('`stagger-step` ->', function () {
  it('should create a stagger funtion', function () {
    expect(mojs.stagger.step(10, 20).__mojs__isStaggerFunction).toBe(true);
  });

  it('should generate re `base` and `step`', function () {
    var baseValue = 5;
    var stepValue = 25;
    var step = mojs.stagger.step(baseValue, stepValue);

    for (var i = 0; i < 12 ; i++) {
      expect(step(i)).toBe(baseValue + (i * stepValue));
    }
  });

  it('should treat `base` as `0` if one value passed', function () {
    var stepValue = 25;
    var step = mojs.stagger.step(stepValue);

    for (var i = 0; i < 12 ; i++) {
      expect(step(i)).toBe(0 + (i * stepValue));
    }
  });

  it('should work with `units`', function () {
    var baseValue = '5%';
    var stepValue = '25%';
    var step = mojs.stagger.step(baseValue, stepValue);

    expect(step(0)).toBe('5%');
    expect(step(1)).toBe('30%');
    expect(step(2)).toBe('55%');
    expect(step(3)).toBe('80%');
    expect(step(4)).toBe('105%');
    expect(step(5)).toBe('130%');
  });

  it('should work with `units` #no base', function () {
    var stepValue = '25rem';
    var step = mojs.stagger.step(stepValue);

    expect(step(0)).toBe('0rem');
    expect(step(1)).toBe('25rem');
    expect(step(2)).toBe('50rem');
    expect(step(3)).toBe('75rem');
    expect(step(4)).toBe('100rem');
    expect(step(5)).toBe('125rem');
  });

  it('should treat `base` units as top priority #1', function () {
    var baseValue = '25%';
    var stepValue = '25rem';
    var step = mojs.stagger.step(baseValue, stepValue);

    expect(step(0)).toBe('25%');
    expect(step(1)).toBe('50%');
    expect(step(2)).toBe('75%');
    expect(step(3)).toBe('100%');
    expect(step(4)).toBe('125%');
  });

  it('should treat `base` units as top priority #2', function () {
    var baseValue = '25%';
    var stepValue = 5;
    var step = mojs.stagger.step(baseValue, stepValue);

    expect(step(0)).toBe('25%');
    expect(step(1)).toBe('30%');
    expect(step(2)).toBe('35%');
    expect(step(3)).toBe('40%');
    expect(step(4)).toBe('45%');
  });
});
