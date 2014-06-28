describe('My Tested Directive', function () {
	var $compile, $rootScope;

  //Require the module our directive is attached to
  beforeEach(module('myApp'));

  //The inject function strips away the underscores, which allows us
  //to avoid any scoping confusion
  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  //We'll use this template for all our tests
  var directiveTpl = '<div player-widget="playerList"></div>';
  it('should create player widget element', function () {
    var $scope = $rootScope.$new();
    //The passing a template into $compile returns a “linking” function that can
    //be used to take a scope and apply it to the template
    var $element = $compile(directiveTpl)($scope);
    //Now the actual test
    expect($element.html()).toContain('class="player-widget"');
  });

  var playerList;
  beforeEach(function () {
    //We've updated this to include a fourth player without a team
    playerList = [
      { "name" : "Babe Ruth", "team" : "Yankees" },
      { "name" : "Jackie Robinson", "team" : "Dodgers" },
      { "name" : "Hank Aaron", "team" : "Braves" },
      { "name" : "John Smith"}
    ];
  });

  it('should scope playerList to players', function () {
    var $parent = $rootScope.$new();
    $parent.playerList = playerList;

    var $element = $compile(directiveTpl)($parent);

    var $directiveScope = $element.scope(); //Angular provides the scope() method to retrieve an element's scope

    expect($directiveScope.players).toBeDefined();//Confirm we have a new property
    expect($directiveScope.players.length).toEqual(playerList.length);//Confirm our list is the same length
  });

  it('should generate player elements for each player', function () {
    var $scope = $rootScope.$new();
    $scope.playerList = playerList;

    var $element = $compile(directiveTpl)($scope);
    
    //We're outside of the angular $watch loop here, so we need to call $digest manually
    $scope.$digest();
    
    //the jQLite wrapper provided by angular can only find elements by tag name. If you're including jQuery, you'll have access to those full methods instead
    var $players = $element.find('p');
    
    expect($players.length).toEqual(playerList.length);
    expect($players.eq(0).text()).toContain('Babe Ruth');
  });

  it('should activate the player', function () {
    var $scope = $rootScope.$new();
    $scope.playerList = playerList;
    var $element = $compile(directiveTpl)($scope);
    var $directiveScope = $element.scope();
    var firstPlayer = $directiveScope.players[0];
    //First validate that the active property is either false or undefined
    expect(firstPlayer.active).toBeFalsy();
    $directiveScope.activate(firstPlayer);
    //Now confirm that we've set that same property to true
    expect(firstPlayer.active).toBe(true);
  });

  it('should display team when present', function () {
    var $scope = $rootScope.$new();
    $scope.playerList = playerList;
    var $element = $compile(directiveTpl)($scope);
    $scope.$digest();
    var $players = $element.find('p');
    var teamNode = $players.eq(0).find('span');
    expect(teamNode.text()).toContain(playerList[0].team);
  });

  it('should not display team when not present', function () {
    var $scope = $rootScope.$new();
    $scope.playerList = playerList;
    var $element = $compile(directiveTpl)($scope);
    $scope.$digest();
    var $players = $element.find('p');
    var teamNode = $players.eq(3).find('span');
    expect(teamNode.css('display')).toBe('none');
  });
});