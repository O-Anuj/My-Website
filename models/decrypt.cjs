const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();
  
  const input = fs.readFileSync(inputFile);
  const iv = input.slice(0, 16);
  const content = input.slice(16);
  
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const output = fs.createWriteStream(outputFile);
  
  decipher.pipe(output);
  decipher.write(content);
  decipher.end();
};

decryptFile("public/models/character.enc", "public/models/character.glb", "Character3D #@");
console.log("Decryption complete!");
