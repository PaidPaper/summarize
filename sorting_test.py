from sorting import merge_sort, quick_sort

def run_tests():
    print('Running sorting algorithm tests...\n')
    
    # Test cases
    test_cases = [
        {
            'name': 'Empty array',
            'input': [],
            'expected': []
        },
        {
            'name': 'Single element',
            'input': [42],
            'expected': [42]
        },
        {
            'name': 'Already sorted',
            'input': [1, 2, 3, 4, 5],
            'expected': [1, 2, 3, 4, 5]
        },
        {
            'name': 'Reverse sorted',
            'input': [5, 4, 3, 2, 1],
            'expected': [1, 2, 3, 4, 5]
        },
        {
            'name': 'Random order',
            'input': [64, 34, 25, 12, 22, 11, 90],
            'expected': [11, 12, 22, 25, 34, 64, 90]
        },
        {
            'name': 'Duplicates',
            'input': [5, 2, 8, 2, 9, 1, 5],
            'expected': [1, 2, 2, 5, 5, 8, 9]
        },
        {
            'name': 'Negative numbers',
            'input': [-3, -1, -4, -2, 0, 1],
            'expected': [-4, -3, -2, -1, 0, 1]
        }
    ]
    
    passed_tests = 0
    total_tests = len(test_cases) * 2  # 2 algorithms
    
    # Test merge sort
    print('Testing Merge Sort:')
    print('=================')
    for test_case in test_cases:
        result = merge_sort(test_case['input'].copy())
        passed = result == test_case['expected']
        print(f"{test_case['name']}: {'PASS' if passed else 'FAIL'}")
        if not passed:
            print(f"  Expected: {test_case['expected']}")
            print(f"  Got:      {result}")
        if passed:
            passed_tests += 1
    
    print('\nTesting Quick Sort:')
    print('==================')
    for test_case in test_cases:
        result = quick_sort(test_case['input'].copy())
        passed = result == test_case['expected']
        print(f"{test_case['name']}: {'PASS' if passed else 'FAIL'}")
        if not passed:
            print(f"  Expected: {test_case['expected']}")
            print(f"  Got:      {result}")
        if passed:
            passed_tests += 1
    
    print(f'\nTest Results: {passed_tests}/{total_tests} tests passed')
    
    if passed_tests == total_tests:
        print('All tests passed! ✅')
    else:
        print('Some tests failed! ❌')

if __name__ == '__main__':
    run_tests()