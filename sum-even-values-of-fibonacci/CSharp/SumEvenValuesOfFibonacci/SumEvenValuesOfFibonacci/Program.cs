using System;

namespace SumEvenValuesOfFibonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            var max = 4000000;
            Console.WriteLine($"Sum even values of the Fibonacci series less than {max}:");
            Console.WriteLine($"Non-recursive approach using memoization: {SumEvens.SumFibonacci(max)}");
            Console.WriteLine($"Recursive approach using memoization: {SumEvens.RecursiveSumFibonacci(1, 2, 2)}");
        }
    }
}
