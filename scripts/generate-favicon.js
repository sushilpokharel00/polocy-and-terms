const fs = require('fs');
const inPath = 'src/485117.jpg';
const outPath = 'public/favicon.svg';
if (!fs.existsSync(inPath)) {
  console.error('Source image not found:', inPath);
  process.exit(1);
}
const b64 = fs.readFileSync(inPath).toString('base64');
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <defs>
    <clipPath id="r"><rect x="0" y="0" width="100" height="100" rx="18" ry="18"/></clipPath>
  </defs>
  <rect width="100" height="100" fill="#4f46e5" rx="18"/>
  <image clip-path="url(#r)" width="100" height="100" href="data:image/jpeg;base64,${b64}"/>
</svg>`;
fs.writeFileSync(outPath, svg, 'utf8');
console.log('Wrote', outPath);
