function validateProject(data) {
  const errors = [];
  if (!data.name || typeof data.name !== "string") {
    errors.push("Le nom du projet est obligatoire.");
  }
  if (
    !["Appartement", "Villa", "Bureau", "Studio", "Immeuble"].includes(
      data.type
    )
  ) {
    errors.push("Type de projet invalide.");
  }
  if (!data.rooms || typeof data.rooms !== "number") {
    errors.push("Le nombre de pièces est obligatoire.");
  }
  if (!data.customization || !data.customization.colors) {
    errors.push("Les couleurs sont obligatoires.");
  }
  if (!data.customization.materials) {
    errors.push("Les matériaux sont obligatoires.");
  }
  if (
    !data.customization.surface ||
    typeof data.customization.surface !== "number"
  ) {
    errors.push("La surface est obligatoire.");
  }
  return errors;
}

module.exports = { validateProject };
