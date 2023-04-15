let seasons  = ['Winter', 'Spring', 'Summer', 'Fall'];

for (let season in seasons) {
    console.log(`${+season + 1}) ${seasons[season]}`);
}
/* 
1) Winter
2) Spring
3) Summer
4) Fall 
*/

console.log(`Seasons: ${seasons.join(', ')}\n`); // Seasons: Winter, Spring, Summer, Fall

seasons.sort();
console.log(...seasons); // Fall Spring Summer Winter

// seasons.sort( (a, b) => a - b);
seasons.reverse();
console.log(...seasons); // Winter Summer Spring Fall

console.log(seasons.includes('Fall')); // true
