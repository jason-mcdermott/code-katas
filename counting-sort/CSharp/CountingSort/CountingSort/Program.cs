using System;

namespace CountingSort
{
    class Program
    {
        static void Main(string[] args)
        {
            // CHALLENGE: Given an array of integers that fall within a bounded-range (like 1 to 100) 
            //      and may include duplicates, sort the numbers.
            // ASSUMPTIONS: integers fall within a bounded-range. may include duplicates

            // SOLUTION: loop through array and tally the occurrence of each number, storing in a dictionary. 
            //      then loop through the integers of the range and insert from the dictionary where applicable.
            //      - when a dictionary item has duplicates loop through those to insert as well.
            
            // for simplicity, example set sorts 1 - 20
            int[] numbers = new[] { 14, 18, 18, 17, 7, 13, 8, 13, 3, 4, 12, 8, 3, 11, 14, 15, 18, 15, 9, 10 };

            var sorted = CountingSort.Sort(numbers);

            foreach (var item in sorted)
            {
                Console.WriteLine(item);
            }
        }
    }
}
