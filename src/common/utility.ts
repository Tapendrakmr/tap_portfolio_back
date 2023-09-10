const isNullOrUndefined = (param: any) => {
  if (param === null || param === undefined) {
    return true;
  }
  return false;
};

export { isNullOrUndefined };
