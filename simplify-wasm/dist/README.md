# simplify-wasm

This repository contains a WebAssembly (WASM) port of the `simplify-rs` library, offering a robust algorithm for simplifying a path represented by a sequence of points to a sequence of cubic Bezier curves with a specified maximum error tolerance. The original Rust-based library efficiently reduces the complexity of paths while maintaining a high degree of visual fidelity, and this WASM port brings that capability directly to the web, enabling high-performance path simplification directly in the browser.

# live demo
[Live Demo](https://eriksom.github.io/simplify-rs/simplify-wasm/examples/es/)

## Features

- **High Performance:** Leverages the efficiency of Rust and WASM for fast path simplification directly in the web environment.
- **Automatic Scaling for Precision:** Optionally scales paths to a target area before simplification to improve precision, particularly useful for paths with a wide range of sizes.

## Usage

First, ensure you have included the `simplify-wasm` module in your project.
```bash
npm install simplify-wasm
```

Then, you can use the module in your JavaScript or TypeScript code as follows:


```javascript
import init, { simplify_js } from 'simplify_wasm';

async function run() {
    await init(); // Initialize the WASM module

    // Define an array of points
    const points = [
        {x: 0, y: 0},
        {x: 1, y: 1},
        ...
    ];

    // Set the maximum error tolerance for the simplification
    const tolerance = 0.1;

    // Enable automatic up & down scaling for better precision
    const auto_scale_for_precision = true;

    // Simplify points
    const simplifiedCurves = simplify_js(points, tolerance, auto_scale_for_precision);

    /*
    The output is a sequence of cubic bezier curves, each represented by 4 points:
    [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}]
    [0] = start point
    [1] = control point 1
    [2] = control point 2
    [3] = end point
    */

    console.log(simplifiedCurves);
}

run();
```

See also
- [ES6 Example](https://github.com/ErikSom/simplify-rs/blob/master/simplify-wasm/examples/es/index.html)
- [UMD Example](https://github.com/ErikSom/simplify-rs/blob/master/simplify-wasm/examples/umd/index.html)

### Parameters

- `points`: Array of points representing the path to simplify. Each point should be an object with `x` and `y` properties.
- `tolerance`: The allowed maximum error when fitting the curves through the segment points.
- `auto_scale_for_precision`: If `true`, scales the path to a target area before simplification to increase precision.

## Building from Source

If you'd like to build the WASM module from the source, ensure you have the Rust toolchain and `wasm-pack` installed. Then, run:

```bash
sh ./scripts/compile-wasm.sh prod
```

This script compiles the Rust code into a WASM module.

## Performance

This WASM port aims to offer similar performance advantages to the original Rust library, enabling the simplification of complex paths in milliseconds, depending on the path complexity and the host system's capabilities.
