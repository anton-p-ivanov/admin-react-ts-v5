const className = (object: { [key: string]: boolean | string }): string => {
  return Object.entries(object)
    .filter((v) => v[1])
    .map((v) => v[0])
    .join(' ');
};

export default className;
