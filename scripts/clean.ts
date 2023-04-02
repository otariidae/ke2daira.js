import { rmSync } from "node:fs"
import path from "node:path"
import { dirname } from "dirname-filename-esm"

const __dirname = dirname(import.meta)

const distCjsPath = path.join(__dirname, "..", "dist_cjs")
const distEsmPath = path.join(__dirname, "..", "dist_esm")

rmSync(distCjsPath, { recursive: true, force: true })
rmSync(distEsmPath, { recursive: true, force: true })
