// Generated by CoffeeScript 1.3.3
(function() {
  var hello;

  hello = function(name) {
    return "hello " + (name || 'world');
  };

  describe('hello', function() {
    it('should say hello to person', function() {
      return expect(hello('Bob')).toBe('hello Bob');
    });
    return it('should say "hello world" if no provided', function() {
      return expect(hello()).toBe('hello world');
    });
  });

}).call(this);