const CustomError = require('../CustomError');

/** @typedef {'DETAILED_CODED_ERROR'} DetailedCodedError Error code */
/** @typedef {import('../CustomError').ErrorMessage} DetailedCodedErrorMessage Error message */

/**
 * @typedef {import('../CustomError')} DetailedCodedError
 * @param {DetailedCodedErrorCode} code detailed server error code
 * @param {DetailedCodedErrorMessage} message detailed server error message
 * @param {DetailedCodedErrorDetails} details error details
 */

class DetailedCodedError extends CustomError {
/**
* Create an error with details
*/
  constructor(code, message, details) {
    super(code, message);
    this.details = details;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      details: this.details,
    };
  }
}

module.exports = DetailedCodedError;
