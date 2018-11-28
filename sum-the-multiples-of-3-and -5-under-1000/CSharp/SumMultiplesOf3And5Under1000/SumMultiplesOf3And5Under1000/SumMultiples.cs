using System;
using System.Collections.Generic;

namespace SumMultiplesOf3And5Under1000
{
    public class SumMultiples
    {
        private static int counter = 0;
        public static int BruteForceSum()
        {
            int sum = 0;
           
            for (var i = 1; i < 1000; i++)
            {
                if (i % 3 == 0 || i % 5 == 0)
                {
                    sum += i;
                }
            }

            return sum;
        }

        public static int RecursiveSum(int x, int sum)
        {
            if (x <= 0)
            {
                return sum;
            }

            if (x % 3 == 0 || x % 5 == 0)
            {
                sum += x;
            }
            
            return RecursiveSum(x - 1, sum);
        }

        public static int OptimizedSum()
        {
            var dict = new Dictionary<int, int>();
            int sum = 0;
           
            for (var i = 999; i >= 3; i = i - 3)
            {
                // check to make sure value has not been included already
                if (!dict.ContainsKey(i))
                {
                    dict.Add(i, i);
                    sum += i;
                }
            }

            for (var j = 995; j >= 5; j = j - 5)
            {
                // check to make sure value has not been included already
                if (!dict.ContainsKey(j))
                {
                    dict.Add(j, j);
                    sum += j;
                }
            }
            
            return sum;
        }
    }
}
