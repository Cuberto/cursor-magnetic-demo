## Cuberto Cursor & Magnetic Demo

### Setup

`npm install` or `yarn install`

### Start

`gulp` or `gulp serve` deploy app and start browsersync server + watchers

### Frontend dependencies
jQuery (https://jquery.com/)

GSAP v3 (https://greensock.com/gsap/)

### Usage
Include stylesheet from: /src/scss/cursor.scss

```javascript
import Cursor from "cursor";
import Magnetic from "magnetic";

// Basic cursor
const cursor = new Cursor();

// Cursor options with defaults
const cursor = new Cursor({
    container: "body", // container to attach
    speed: 0.7, // default speed
    ease: "expo.out", // default ease (gsap)
    visibleTimeout: 300 // disappear timeout
});

// Basic magnetic
const magnetic = new Magnetic(el);

// Magnetic options with default
const magnetic = new Magnetic(el, {
    y: 0.2, // horizontal delta
    x: 0.2, // vertical delta
    s: 0.2, // speed
    rs: 0.7 // release speed
});

// Automatic handle magnetic elements through attribute
$('[data-magnetic]').each(function () {new Magnetic(this);});
```

## File structure
```bash
├── /tmp/                       # Temporary served files
└── /src/                       # The source code of the application
    ├── /js/                    # JavaScript source
    ├── /pug/                   # Pug templates
        └── /_includes/         # Pug partials
    ├── /scss/                  # SCSS styles
    ├── /static/                # Static files (fonts, images, videos, etc..)
