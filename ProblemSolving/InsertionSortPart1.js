/**
* Sorting
* One common task for computers is to sort data. For example, people might want to see all their files on a computer sorted by size. Since sorting is a simple problem with many different possible solutions, it is often used to introduce the study of algorithms.

* Insertion Sort
* These challenges will cover Insertion Sort, a simple and intuitive sorting algorithm. We will first start with a nearly sorted list.

* Insert element into sorted list
* Given a sorted list with an unsorted number  in the rightmost cell, can you write some simple code to insert  into the array so that it remains sorted?

* Since this is a learning exercise, it won't be the most efficient way of performing the insertion. It will instead demonstrate the brute-force method in detail.

* Assume you are given the array  indexed . Store the value of . Now test lower index values successively from  to  until you reach a value that is lower than ,  in this case. Each time your test fails, copy the value at the lower index to the current index and print your array. When the next lower indexed value is smaller than , insert the stored value at the current index and print the entire array.

* The results of operations on the example array is:

* Starting array:
* Store the value of  Do the tests and print interim results:
 **/

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    const val = arr[n - 1];
      let i = n - 1;

      while (arr[i] >= val) {
          arr[i] = arr[--i];
          if (arr[i] >= val) console.log(arr.join(' '));
      }

      arr[i + 1] = val;
      console.log(arr.join(' '));
  }
