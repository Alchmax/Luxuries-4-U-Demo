const fs = require('fs');
const path = require('path');
const matter = require('gray-matter'); // Install via: npm install gray-matter

const contentDir = path.join(__dirname, 'content/products');
const outputFile = path.join(__dirname, 'products.json');

const products = fs.readdirSync(contentDir).map(file => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return data;
});

fs.writeFileSync(outputFile, JSON.stringify(products, null, 2));
console.log('Products JSON generated successfully.');