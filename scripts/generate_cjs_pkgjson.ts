import { writeFileSync } from "node:fs"
import path from "node:path"
import { dirname } from "dirname-filename-esm"

const __dirname = dirname(import.meta)

const cjsPkgJsonPath = path.join(__dirname, "..", "dist_cjs", "package.json")
const cjsPkgJsonContent = {
  type: "commonjs",
}

writeFileSync(cjsPkgJsonPath, JSON.stringify(cjsPkgJsonContent))
