using System;

namespace SumMultiplesOf3And5Under1000
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"Brute-force: {SumMultiples.BruteForceSum()}");
            Console.WriteLine($"Recursive: {SumMultiples.RecursiveSum(999, 0)}");
            Console.WriteLine($"Optimized: {SumMultiples.OptimizedSum()}");
        }
    }
}
