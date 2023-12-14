let arr = [1, 4, 6, 3, 56, 86, 6, 5, 3, 7, 8]

// bubble sort 

function bubbleSort() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
}

bubbleSort(arr)

// optimized bubble sort 

let arr1 = [1, 3, 4, 5, 6, 7, 3, 23, 6]
//let arr1 = [ 1 , 2 ,3 ,3 , 4,5 , 5, 6]

function BubbleSort2() {
    let isSwapped = false;

    for (let i = 0; i < arr1.length; i++) {
        isSwapped = false;
        for (let j = 0; j < (arr1.length - i - 1); j++) {
            if (arr1[j] > arr1[j + 1]) {
                let temp = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j + 1] = temp
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    console.log(arr1)
}

BubbleSort2(arr1)

// bubble sort optimized


function BubbleSort3(arr2) {
    // let isSwappeds = false;

    for (let i = 0; i < arr2.length; i++) {
        // isSwappeds = false;
        for (let j = 0; j < (arr2.length - i - 1); j++) {
            if (arr2[j] > arr2[j + 1]) {
                let temp = arr2[j]
                arr2[j] = arr2[j + 1]
                arr2[j+1] = temp
                // isSwappeds = true;
            }
        }
        // if (!isSwappeds) {
        //     break;
        // }
    }
    console.log(arr2)
}
var arr2 = [3, 4, 5, 4, 2, 3, 56, 7, 8]

BubbleSort3(arr2)



function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    // Print the sorted array
    console.log(arr);
}

// This is our unsorted array
// var arr = [234, 43, 55, 63, 5, 6, 235, 547];

bblSort(arr);

// optimized bubble sort

 let arr3 = [34, 4, 343, 22, 3, 4, 554, 444, 892]
// let arr3 = [1,2,3,4,5,6,7]

function bubbleSort4(arr3) {

    let isSwapped1 = false;
    for (let i = 0; i < arr3.length; i++) {
        isSwapped1 = false;
        for (let j = 0; j < (arr3.length - i - 1); j++) {
            if (arr3[j] > arr3[j + 1]) {
                let temp = arr3[j]
                arr3[j] = arr3[j + 1]
                arr3[j + 1] = temp
                isSwapped1 = true;
            }
        }
        if (!isSwapped1) {
            break;
        }
    }
    console.log(arr3)
}

bubbleSort4(arr3)
