import { defineConfig } from "tsup";
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs", "esm"], // Build for commonJS and ESModules
    dts: true, // Generate declaration file (.d.ts)
    splitting: false,
    sourcemap: true,
    clean: true,
    esbuildPlugins: [
        sassPlugin({
            type: "style",
            embedded: true
        })
    ]
});
