export function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left: number[] = [];
    const middle: number[] = [];
    const right: number[] = [];

    for (const element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element === pivot) {
            middle.push(element);
        } else {
            right.push(element);
        }
    }

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

export function quickSortInPlace(arr: number[], low: number = 0, high: number = arr.length - 1): void {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortInPlace(arr, low, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, high);
    }
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

export function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

export function insertionSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}