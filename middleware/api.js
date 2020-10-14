const checkApiUrl = (req, res, next) => {
  let serviceUrl = 'http://localhost:';

  switch (req.originalUrl.split('/')[2]) {
    case 'reviews':
      serviceUrl += `3001${req.originalUrl}`;
      break
    default:
      serviceUrl = 400;
  }
  req.serviceUrl = serviceUrl;
  next();
};

module.exports = {
  checkApiUrl,
};
