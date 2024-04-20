module.exports = function (theme) {
  return {
    ".center": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      marginInline: "auto",
    },
    ".center-x": {
      display: "table",
      marginInline: "auto",
    },
    ".center-both": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ".center-block": {
      display: "flex",
      alignItems: "center",
    },
    ".center-inline": {
      display: "flex",
      justifyContent: "center",
    },
    ".center-abs": {
      position: "absolute",
      left: "50%",
      top: "50%",
      translateX: "-50%",
      translateY: "-50%",
    },
    ".center-abs-x": {
      position: "absolute",
      left: "50%",
      translateX: "-50%",
    },
    ".center-abs-y": {
      position: "absolute",
      top: "50%",
      translateY: "-50%",
    },
  };
};
