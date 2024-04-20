module.exports = function (target, source) {
  if (typeof target !== "object" || typeof source !== "object") {
    return source;
  }

  for (const key of Object.keys(source)) {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (
      typeof targetValue === "object" &&
      typeof sourceValue === "object"
    ) {
      target[key] = deepMerge(targetValue, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  }

  return target;
};
