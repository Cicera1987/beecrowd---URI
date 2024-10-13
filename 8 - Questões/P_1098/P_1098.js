
for (let i = 0; i <= 20; i += 2) {
    for (let j = 1; j <= 3; j++) {
        if (i % 10 === 0) {
            console.log(`I=${i / 10} J=${j + i / 10}`);
        } else {
            console.log(`I=${i / 10} J=${(j + i / 10).toFixed(1)}`);
        }
    }
}
