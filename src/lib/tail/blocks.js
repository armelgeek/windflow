"use strict";
import jp from 'jsonpath';

export default class Block {
    constructor() {
        this.id = 0;
        this.blocks_id = this.randomID();
        this.name = 'Block ';
        this.description = 'A generic block';
        this.category = 'component';
        this.tags = [];
        this.json = {
            build: {
                purgeCSS: null,
                images: null,
                fonts: null,
                plugins: null
            },
            blocks: []
        };
        this.html = null;
        this.image = '';
        this.enabled = true;
        this.premium = false;
        this.stars = 0;
        this.favorite = false;
    }

    randomID() {
        return 'component-' + Math.random().toString(36).substr(2, 5);
    }

    purge() {
        this.purgeCSS();
        this.purgeImages();
        this.purgeFonts();
        return this;
    }

    purgeCSS() {
        const cssPaths = '$..blocks..css.css';
        const containerPaths = '$..blocks..css.container';

        const cssClasses = this.extractAndFlatten(cssPaths);
        const containers = this.extractAndFlatten(containerPaths);

        this.json.build.purgeCSS = [...new Set([...cssClasses, ...containers])].sort();
        return this;
    }

    purgeImages() {
        const imagePaths = '$..blocks..image.url';
        const images = jp.query(this.json.blocks, imagePaths)
            .filter(img => img && !img.includes('http'));

        this.json.build.images = [...new Set(images.join(',').split(' ').filter(Boolean))];
        return this;
    }

    purgeFonts() {
        const stylePaths = '$..blocks..style';
        const fontFamilies = jp.query(this.json.blocks, stylePaths)
            .filter(style => style && style.includes('font-family'))
            .map(font => this.extractFontFamily(font));

        this.json.build.fonts = [...new Set(fontFamilies)];
        return this;
    }

    extractAndFlatten(path) {
        return jp.query(this.json.blocks, path)
            .filter(Boolean)
            .join(',')
            .split(' ')
            .filter(Boolean)
            .join(',')
            .replaceAll(',,', ',')
            .split(',');
    }

    extractFontFamily(style) {
        return style.replace('font-family:', '').replace(/["']/g, '').trim().split(/[^a-zA-Z0-9-]/).filter(Boolean);
    }
}
