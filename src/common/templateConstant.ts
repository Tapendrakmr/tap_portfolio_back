import compile from 'string-template/compile';

const templateConstants = {
  INVALID: compile('Invalid {0}'),
  CREATE_SUCCESS: compile('{0} created successfully'),
};
export { templateConstants };
