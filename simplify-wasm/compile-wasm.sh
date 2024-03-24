#!/usr/bin/env bash

# Set default build type to 'dev' if not specified
BUILD_TYPE=${1:-dev}

# build flags
DEV_FLAGS="--dev"
PROD_FLAGS="--release"

# Select flags based on build type
if [ "$BUILD_TYPE" = "dev" ]; then
    FLAGS=$DEV_FLAGS
    echo "Building Development Version"
else
    FLAGS=$PROD_FLAGS
    echo "Building Production Version"
fi

# Web

# build ES6
echo "Building ES6"
wasm-pack build --target web $FLAGS --out-dir ./simplify-wasm/dist/es

echo "Building UMD"
wasm-pack build --target no-modules $FLAGS --out-dir ./simplify-wasm/dist/umd


# Replace wasm_bindgen with simplify_wasm_factory to prevent collisions
sed -i '' 's/wasm_bindgen/simplify_wasm_factory/g' ./simplify-wasm/dist/umd/simplify_wasm.js


# Remove .gitignore file from dist
rm ./simplify-wasm/dist/es/.gitignore
rm ./simplify-wasm/dist/umd/.gitignore

mv ./simplify-wasm/dist/es/package.json ./simplify-wasm/dist/package.json
mv ./simplify-wasm/dist/es/README.md ./simplify-wasm/dist/README.md

rm ./simplify-wasm/dist/es/package.json
rm ./simplify-wasm/dist/es/README.md
rm ./simplify-wasm/dist/umd/package.json
rm ./simplify-wasm/dist/umd/README.md

# check if terser is installed
if ! command -v terser &> /dev/null
then
	echo "terser could not be found, installing terser"
	npm install terser
fi

# minify the js file
echo "Minifying JS"
npx terser ./simplify-wasm/dist/es/simplify_wasm.js --compress --output ./simplify-wasm/dist/es/simplify_wasm.js
npx terser ./simplify-wasm/dist/umd/simplify_wasm.js --compress --output ./simplify-wasm/dist/umd/simplify_wasm.js
