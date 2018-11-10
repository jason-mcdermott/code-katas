using System;
using System.Collections.Generic;

namespace MergeSort
{
    class Program
    {
        static void Main(string[] args)
        {
            var unsorted = new List<int> { 6, 8, 3, 5, 1, 9, 2, 7, 4, 10 };

            var sortedItems = MergeSort.Sort(unsorted);

            foreach (var item in sortedItems)
            {
                Console.WriteLine(item);
            }
        }
    }
}
