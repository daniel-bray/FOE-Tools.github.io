describe("Scripts", () => {
  const normalizedPath = require("path").join(__dirname, "scripts");

  require("fs")
    .readdirSync(normalizedPath)
    .forEach(function(file) {
      require("./scripts/" + file);
    });
});
