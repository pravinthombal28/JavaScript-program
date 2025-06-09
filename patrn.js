function generatePyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        for (let k = i - 1; k >= 1; k--) {
            row += k;
        }
        console.log(row);
    }
}

// Example usage
generatePyramid(4);