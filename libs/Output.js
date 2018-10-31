'use strict';

class Output {
  constructor(res) {
    this.res = res;

    this.errorCode = {
      400: "Bad Request",
      404: "Not Found",
      500: "Internal Server Error"
    };

    this.success = this.success.bind(this);
    this.error   = this.error.bind(this);
    this.resJson = this.resJson.bind(this);
  }

  success(data) {
    this.resJson(data);
  }

  error(errors=[], code=500) {
    if (!Array.isArray(errors) && errors.hasOwnProperty("respCode")) {
      code = errors.respCode;
      delete errors.respCode;
    }

    if (!Array.isArray(errors)) {
      if (!errors.hasOwnProperty("message")) {
        errors.message = "Internal Server Error";
      }

      errors = [errors]
    }

    const msg = this.errorCode.hasOwnProperty(code) ? this.errorCode[code] : this.errorCode[500] ;
    const error = {
      errors,
      code: code,
      message: msg
    };

    this.resJson({
      error
    }, code);
  }

  resJson(jsonObj, code=200) {
    this.res.status(code).json(jsonObj);
  }
}

module.exports = Output;
