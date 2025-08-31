def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]
    
    return merge(merge_sort(left), merge_sort(right))

def merge(left, right):
    result = []
    left_index = 0
    right_index = 0
    
    while left_index < len(left) and right_index < len(right):
        if left[left_index] <= right[right_index]:
            result.append(left[left_index])
            left_index += 1
        else:
            result.append(right[right_index])
            right_index += 1
    
    while left_index < len(left):
        result.append(left[left_index])
        left_index += 1
    
    while right_index < len(right):
        result.append(right[right_index])
        right_index += 1
    
    return result

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    less = []
    equal = []
    greater = []
    
    for element in arr:
        if element < pivot:
            less.append(element)
        elif element > pivot:
            greater.append(element)
        else:
            equal.append(element)
    
    return quick_sort(less) + equal + quick_sort(greater)