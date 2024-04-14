// eslint-disable-next-line import/no-extraneous-dependencies
const { Validator } = require('jsonschema');

const v = new Validator();

// eslint-disable-next-line consistent-return
const schemaValidator = (schema) => (req, res, next) => {
  const result = v.validate(req.body, schema);
  if (!result.valid) {
    const messageError = [];

    for (const item of result.errors) {
      messageError.push(item.message.replace('"', '').replace('"', ''));
    }

    return res.status(401).send({
      schemaError: messageError,
    });
  }
  return next();
};

module.exports = schemaValidator;
