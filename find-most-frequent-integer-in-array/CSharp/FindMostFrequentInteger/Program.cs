using System;
using System.Collections.Generic;

namespace FindMostFrequentInteger
{
    class Program
    {
        static void Main(string[] args)
        {
            var array = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 1 };
            var finder = new Finder();
            Console.WriteLine("Using a loop the answer is:");
            Console.WriteLine(finder.Count(array).Key);
       
            var list = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 1 };
            var recursiveFinder = new RecursiveFinder();
            Console.WriteLine("Using recursion the answer is:");
            Console.WriteLine(recursiveFinder.Count(0, list).Key);
        }
    }
}
