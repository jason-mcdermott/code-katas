using System;

namespace FindLargestInteger
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = new int[] { 3, 2, 1, 10, 6, 4, 7, 5, 8, 9 };
            var finder = new Finder();
            var largestInt = finder.FindLargest(numbers);
            Console.WriteLine($"Found largest integer: {largestInt}");
        }
    }
}
