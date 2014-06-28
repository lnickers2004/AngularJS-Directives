describe('My Tested Widget', function () {
  beforeEach(function () {
    browser().navigateTo('../../app/index.html');
  });

  it('Should display the widget', function () {
    expect(element('.player-widget').count()).toBe(1);
  });

  it('Should display 3 players', function () {
    expect(repeater('.player-widget .player').count()).toBe(3)
  });

  it('Should highlight a player when clicked', function () {
    var p = element('.player-widget .player:first');
    p.click() ;
    expect(p.attr('class')).toContain('highlighted') ;
  });
});