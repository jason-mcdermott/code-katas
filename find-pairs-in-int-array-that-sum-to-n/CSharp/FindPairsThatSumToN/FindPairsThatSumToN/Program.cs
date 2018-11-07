using System;

namespace FindPairsThatSumToN
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = new []{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };
            const int n = 10;

            var finder = new Finder();
            var results = finder.Find(numbers, n);

            foreach (var result in results)
            {
                Console.WriteLine($"{result.Value[0]}, {result.Value[1]}");
            }
        }
    }
}
