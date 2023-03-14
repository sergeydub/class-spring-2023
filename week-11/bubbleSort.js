
function bubbleSort(arr) {
    let isSwapped;
    for (let i = 0; i < arr.length; i++) {
        console.log("");
        console.log("      RUN:", i);
        isSwapped = false;
        for (let j = 0; j < arr.length-1; j++) {
            console.log(arr, "j:", j);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
                console.log(arr, "*** swapped values:", arr[j], arr[j + 1], "at position:", j, "and", j+1);
            } else {
                console.log(arr, "do nothing with values:", arr[j], arr[j + 1], "at position:", j, "and", j+1);
            }
        }
        if (!isSwapped) {
            break;
        }
    }

    console.log("");
    if (isSwapped) {
        console.log(arr, "ERROR! We should not be swapping values once we are our of the loop!");
    } else {
        console.log(arr, "is sorted!");
    }
}

var myArr = [243, 45, 23, 356, 3, 5346, 35, 5];

bubbleSort(myArr);
