const number = [1, -1, 2, 3]

const filtered = number.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>')
const html = '<ul>' + items.join('') + '</ul>';

console.log(html)