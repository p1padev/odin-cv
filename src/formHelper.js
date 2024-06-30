export default function createEmptyState(arrayOfKeys) {
  return arrayOfKeys.reduce((acc, key) => {
    acc[key] = '';
    return acc;
  }, {});
}
