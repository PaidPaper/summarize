# Summarize Project

This repository contains various TypeScript implementations and testing utilities.

## Features

### Mathematical Operations
- **Basic Math Functions** (`test.ts`) - Core mathematical operations:
  - Addition (`sum`)
  - Subtraction (`subtract`) 
  - Multiplication (`multiply`)
  - Division (`divide`)

### Sorting Algorithms
- **Merge Sort** (`mergeSort.ts`) - A stable divide-and-conquer sorting algorithm with O(n log n) time complexity
- **Quick Sort** (`quickSort.ts`) - An efficient in-place sorting algorithm with average O(n log n) time complexity
  - Includes both functional and in-place implementations

### Testing
- Comprehensive test suite (`sortingTests.ts`) with:
  - Edge case testing (empty arrays, single elements)
  - Performance comparisons between algorithms
  - Large dataset validation (1000+ elements)
  - Duplicate element handling

## Usage

### Mathematical Operations
```typescript
import { sum, subtract, multiply, divide } from './test';

console.log(sum(5, 3));      // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15
console.log(divide(6, 3));   // 2
```

### Merge Sort
```typescript
import { mergeSort } from './mergeSort';

const unsorted = [64, 34, 25, 12, 22, 11, 90];
const sorted = mergeSort(unsorted);
console.log(sorted); // [11, 12, 22, 25, 34, 64, 90]
```

### Quick Sort
```typescript
import { quickSort, quickSortInPlace } from './quickSort';

// Functional approach (returns new array)
const unsorted = [64, 34, 25, 12, 22, 11, 90];
const sorted = quickSort(unsorted);

// In-place approach (modifies original array)
const array = [64, 34, 25, 12, 22, 11, 90];
quickSortInPlace(array);
console.log(array); // [11, 12, 22, 25, 34, 64, 90]
```

## Running Tests

Run the comprehensive test suite to verify all implementations:

```bash
npx ts-node sortingTests.ts
```

The tests include performance benchmarks and verify correctness across various input scenarios.
