module.exports = ctx => {
  const isNormalDpr = /\.css$/.test(ctx.file.basename) && /\bvant\b/.test(ctx.file.dirname);
  return {
    plugins: {
      autoprefixer: {},
      "postcss-px2rem-exclude": {
        remUnit: isNormalDpr ? 37.5 : 75
      }
    }
  };
};
