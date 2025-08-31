import { mergeSort, quickSort } from './sorting';

function runTests() {
    console.log('Running sorting algorithm tests...\n');
    
    // Test cases
    const testCases = [
        {
            name: 'Empty array',
            input: [],
            expected: []
        },
        {
            name: 'Single element',
            input: [42],
            expected: [42]
        },
        {
            name: 'Already sorted',
            input: [1, 2, 3, 4, 5],
            expected: [1, 2, 3, 4, 5]
        },
        {
            name: 'Reverse sorted',
            input: [5, 4, 3, 2, 1],
            expected: [1, 2, 3, 4, 5]
        },
        {
            name: 'Random order',
            input: [64, 34, 25, 12, 22, 11, 90],
            expected: [11, 12, 22, 25, 34, 64, 90]
        },
        {
            name: 'Duplicates',
            input: [5, 2, 8, 2, 9, 1, 5],
            expected: [1, 2, 2, 5, 5, 8, 9]
        },
        {
            name: 'Negative numbers',
            input: [-3, -1, -4, -2, 0, 1],
            expected: [-4, -3, -2, -1, 0, 1]
        }
    ];
    
    let passedTests = 0;
    let totalTests = testCases.length * 2; // 2 algorithms
    
    // Test merge sort
    console.log('Testing Merge Sort:');
    console.log('=================');
    for (const testCase of testCases) {
        const result = mergeSort([...testCase.input]);
        const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
        console.log(`${testCase.name}: ${passed ? 'PASS' : 'FAIL'}`);
        if (!passed) {
            console.log(`  Expected: [${testCase.expected.join(', ')}]`);
            console.log(`  Got:      [${result.join(', ')}]`);
        }
        if (passed) passedTests++;
    }
    
    console.log('\nTesting Quick Sort:');
    console.log('==================');
    for (const testCase of testCases) {
        const result = quickSort([...testCase.input]);
        const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
        console.log(`${testCase.name}: ${passed ? 'PASS' : 'FAIL'}`);
        if (!passed) {
            console.log(`  Expected: [${testCase.expected.join(', ')}]`);
            console.log(`  Got:      [${result.join(', ')}]`);
        }
        if (passed) passedTests++;
    }
    
    console.log(`\nTest Results: ${passedTests}/${totalTests} tests passed`);
    
    if (passedTests === totalTests) {
        console.log('All tests passed! ✅');
    } else {
        console.log('Some tests failed! ❌');
    }
}

runTests();