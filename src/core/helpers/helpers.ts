export const idGenerator = (): number => {
  const d1 = new Date();

  return d1.getTime();
};
