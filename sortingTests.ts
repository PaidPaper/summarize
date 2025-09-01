import { mergeSort } from './mergeSort';
import { quickSort, quickSortInPlace } from './quickSort';

function runTests() {
    console.log('Running Sorting Algorithm Tests...\n');
    
    let passedTests = 0;
    let totalTests = 0;
    
    function test(description: string, testFunction: () => boolean) {
        totalTests++;
        console.log(`Test: ${description}`);
        try {
            const result = testFunction();
            if (result) {
                console.log('✅ PASSED\n');
                passedTests++;
            } else {
                console.log('❌ FAILED\n');
            }
        } catch (error) {
            console.log(`❌ FAILED - Error: ${error}\n`);
        }
    }
    
    function arraysEqual(a: number[], b: number[]): boolean {
        return a.length === b.length && a.every((val, index) => val === b[index]);
    }
    
    // Test data
    const emptyArray: number[] = [];
    const singleElement = [5];
    const sortedArray = [1, 2, 3, 4, 5];
    const reverseSortedArray = [5, 4, 3, 2, 1];
    const randomArray = [64, 34, 25, 12, 22, 11, 90];
    const duplicateArray = [5, 2, 8, 2, 9, 1, 5];
    const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    
    // Merge Sort Tests
    console.log('=== MERGE SORT TESTS ===');
    
    test('Merge Sort: Empty array', () => {
        const result = mergeSort(emptyArray);
        return arraysEqual(result, []);
    });
    
    test('Merge Sort: Single element', () => {
        const result = mergeSort(singleElement);
        return arraysEqual(result, [5]);
    });
    
    test('Merge Sort: Already sorted array', () => {
        const result = mergeSort(sortedArray);
        return arraysEqual(result, [1, 2, 3, 4, 5]);
    });
    
    test('Merge Sort: Reverse sorted array', () => {
        const result = mergeSort(reverseSortedArray);
        return arraysEqual(result, [1, 2, 3, 4, 5]);
    });
    
    test('Merge Sort: Random array', () => {
        const result = mergeSort(randomArray);
        return arraysEqual(result, [11, 12, 22, 25, 34, 64, 90]);
    });
    
    test('Merge Sort: Array with duplicates', () => {
        const result = mergeSort(duplicateArray);
        return arraysEqual(result, [1, 2, 2, 5, 5, 8, 9]);
    });
    
    test('Merge Sort: Large array (1000 elements)', () => {
        const result = mergeSort([...largeArray]);
        const expected = [...largeArray].sort((a, b) => a - b);
        return arraysEqual(result, expected);
    });
    
    // Quick Sort Tests
    console.log('=== QUICK SORT TESTS ===');
    
    test('Quick Sort: Empty array', () => {
        const result = quickSort(emptyArray);
        return arraysEqual(result, []);
    });
    
    test('Quick Sort: Single element', () => {
        const result = quickSort(singleElement);
        return arraysEqual(result, [5]);
    });
    
    test('Quick Sort: Already sorted array', () => {
        const result = quickSort(sortedArray);
        return arraysEqual(result, [1, 2, 3, 4, 5]);
    });
    
    test('Quick Sort: Reverse sorted array', () => {
        const result = quickSort(reverseSortedArray);
        return arraysEqual(result, [1, 2, 3, 4, 5]);
    });
    
    test('Quick Sort: Random array', () => {
        const result = quickSort(randomArray);
        return arraysEqual(result, [11, 12, 22, 25, 34, 64, 90]);
    });
    
    test('Quick Sort: Array with duplicates', () => {
        const result = quickSort(duplicateArray);
        return arraysEqual(result, [1, 2, 2, 5, 5, 8, 9]);
    });
    
    test('Quick Sort: Large array (1000 elements)', () => {
        const result = quickSort([...largeArray]);
        const expected = [...largeArray].sort((a, b) => a - b);
        return arraysEqual(result, expected);
    });
    
    // Quick Sort In-Place Tests
    console.log('=== QUICK SORT IN-PLACE TESTS ===');
    
    test('Quick Sort In-Place: Empty array', () => {
        const testArray = [...emptyArray];
        quickSortInPlace(testArray);
        return arraysEqual(testArray, []);
    });
    
    test('Quick Sort In-Place: Single element', () => {
        const testArray = [...singleElement];
        quickSortInPlace(testArray);
        return arraysEqual(testArray, [5]);
    });
    
    test('Quick Sort In-Place: Already sorted array', () => {
        const testArray = [...sortedArray];
        quickSortInPlace(testArray);
        return arraysEqual(testArray, [1, 2, 3, 4, 5]);
    });
    
    test('Quick Sort In-Place: Reverse sorted array', () => {
        const testArray = [...reverseSortedArray];
        quickSortInPlace(testArray);
        return arraysEqual(testArray, [1, 2, 3, 4, 5]);
    });
    
    test('Quick Sort In-Place: Random array', () => {
        const testArray = [...randomArray];
        quickSortInPlace(testArray);
        return arraysEqual(testArray, [11, 12, 22, 25, 34, 64, 90]);
    });
    
    test('Quick Sort In-Place: Array with duplicates', () => {
        const testArray = [...duplicateArray];
        quickSortInPlace(testArray);
        return arraysEqual(testArray, [1, 2, 2, 5, 5, 8, 9]);
    });
    
    test('Quick Sort In-Place: Large array (1000 elements)', () => {
        const testArray = [...largeArray];
        quickSortInPlace(testArray);
        const expected = [...largeArray].sort((a, b) => a - b);
        return arraysEqual(testArray, expected);
    });
    
    // Performance comparison
    console.log('=== PERFORMANCE COMPARISON ===');
    const performanceArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
    
    console.log('Testing with 10,000 random elements...');
    
    const mergeSortStart = performance.now();
    mergeSort([...performanceArray]);
    const mergeSortEnd = performance.now();
    console.log(`Merge Sort: ${(mergeSortEnd - mergeSortStart).toFixed(2)}ms`);
    
    const quickSortStart = performance.now();
    quickSort([...performanceArray]);
    const quickSortEnd = performance.now();
    console.log(`Quick Sort: ${(quickSortEnd - quickSortStart).toFixed(2)}ms`);
    
    const quickSortInPlaceStart = performance.now();
    const inPlaceArray = [...performanceArray];
    quickSortInPlace(inPlaceArray);
    const quickSortInPlaceEnd = performance.now();
    console.log(`Quick Sort In-Place: ${(quickSortInPlaceEnd - quickSortInPlaceStart).toFixed(2)}ms`);
    
    console.log(`\n=== TEST SUMMARY ===`);
    console.log(`Passed: ${passedTests}/${totalTests}`);
    console.log(`Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);
    
    if (passedTests === totalTests) {
        console.log('🎉 All tests passed!');
    } else {
        console.log('⚠️  Some tests failed. Please review the implementations.');
    }
}

if (require.main === module) {
    runTests();
}