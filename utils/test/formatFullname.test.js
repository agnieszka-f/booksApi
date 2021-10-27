const formatFullname = require('../formatFullname.js');
const { expect } = require('chai');

describe('FormatFullname', () => {

    it('should return an error if "fullName" arg is not a string', () => {
      expect(formatFullname(undefined)).to.equal('Error');
      expect(formatFullname(5)).to.equal('Error');
      expect(formatFullname([])).to.equal('Error');
      expect(formatFullname({})).to.equal('Error');
      expect(formatFullname(function(){})).to.equal('Error');
    });
    
    it('should return an error if "fullName" arg length is 0', () => {
      expect(formatFullname('')).to.equal('Error');
    });

    it('should return an false if the format is incorrect - corect format <firstname> <lastname> (e.g. John Doe)', () => {
      expect(formatFullname('JohnDoe')).to.equal(false);
      expect(formatFullname('John Doe Lorem')).to.equal(false);
      expect(formatFullname(' Doe')).to.equal(false); 
    });

    it('should return good "fullName" if proper args', () => {
      expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
      expect(formatFullname('JOHN DOE')).to.equal('John Doe');
      expect(formatFullname('jOHn dOE ')).to.equal('John Doe');
      expect(formatFullname(' AmAnda DOE')).to.equal('Amanda Doe');
    });
  });