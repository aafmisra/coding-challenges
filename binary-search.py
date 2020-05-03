def binary_search(list, val):
    start = 0
    end = len(list) - 1

    while(end > start):
        middle = (start + end) // 2

        if (val < list[middle]):
            end = middle - 1
        elif(val > list[middle]):
            start = middle + 1
        else:
            return middle 
        
    return -1 

print(binary_search([1, 2, 3, 5, 8, 10, 13, 17], 10))
        
