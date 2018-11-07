"use strict";

var _jsverify = _interopRequireDefault(require("jsverify"));

var _lib = require("./lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('chooseRandom', function () {
  it('Should return an array', function () {
    _jsverify.default.assertForall('array nat', function (arr) {
      return Array.isArray((0, _lib.chooseRandom)(arr));
    });
  });
  it('Should not mutate the array', function () {
    _jsverify.default.assertForall('array nat', function (arr) {
      var arrBefore = arr;
      (0, _lib.chooseRandom)(arr);
      return arrBefore === arr;
    });
  });
  it('Should default to return an empty array', function () {
    _jsverify.default.assert(function () {
      return (0, _lib.chooseRandom)().length === 0;
    });
  });
  it('Should return an array with length equal to the given number (if provided)', function () {
    _jsverify.default.assertForall('array nat', function (arr) {
      if (arr.length === 0 || arr.length === 1) {
        // Here the numItems value given to chooseRandom is irrelevent as
        // an array of length 0 or 1 should just return the given array
        // with no possibility of randomization.
        return arr === (0, _lib.chooseRandom)(arr, 948672894968) && arr === (0, _lib.chooseRandom)(arr, 0) && arr === (0, _lib.chooseRandom)(arr);
      }

      var random = (0, _lib.chooseRandom)(arr, 2);
      return random.length === 2;
    });
  });
});