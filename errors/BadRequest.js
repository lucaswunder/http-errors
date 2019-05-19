const CustomError = require('../CustomError');

/** @typedef {'BAD_REQUEST'} BadRequestCode Error code */
/** @typedef {import('../CustomError').ErrorMessage} BadRequestMessage Error message */

/**
 * @typedef {import('../CustomError').CustomError} BadRequest
 * @param {BadRequestCode} code Bad request code
 * @param {BadRequestMessage} message Bad request error message
 * @extends import('../CustomError')
 */

class BadRequest extends CustomError {
  /**
   * Creates a Bad Request Error
   * @param {import('../CustomError').ErrorMessage} message
   * @returns {BadRequest}
   */
  constructor(message) {
    super('BAD_REQUEST', message);
  }
}

/** @exports BadRequest */
module.exports = BadRequest;
