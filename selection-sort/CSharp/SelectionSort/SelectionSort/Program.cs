using System;

namespace SelectionSort
{
    class Program
    {
        static void Main(string[] args)
        {
            var items = new[] { 12, 2, 7, 4, 5, 6, 3, 8, 1, 0, 9, 10, 11 };
            
            var sortedItems = SelectionSort.Sort(items);

            foreach (var item in sortedItems)
            {
                Console.WriteLine(item);
            }
        }
    }
}
