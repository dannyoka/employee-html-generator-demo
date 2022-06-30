const Manager = require('../lib/Manager');

describe('Manager class', () => {
  describe('Initialization', () => {
    it('should take in an id, name, email and officeNumber', () => {
      const manager = new Manager(1, 'Danny', 'danny@test.com', 24);

      expect(manager.id).toEqual(1);
      expect(manager.name).toEqual('Danny');
      expect(manager.email).toEqual('danny@test.com');
      expect(manager.officeNumber).toEqual(24);
    });
  });
});
