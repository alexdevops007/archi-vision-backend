const errorHandler = (res, error) => {
  console.error(error);
  res
    .status(500)
    .json({ message: "Erreur interne du serveur", error: error.message });
};

module.exports = errorHandler;
