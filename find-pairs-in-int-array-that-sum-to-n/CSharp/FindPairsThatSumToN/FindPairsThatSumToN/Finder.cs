using System;
using System.Collections.Generic;
using System.Linq;

namespace FindPairsThatSumToN
{
    public class Finder
    {
        public Dictionary<int, int[]> Find(int[] numbers, int n)
        {
            // copy the array so that while looping we can remove
            // found pairs and avoid counting a number twice or searching
            // more than necessary
            var copy = numbers.ToList();
            var results = new Dictionary<int, int[]>();

            foreach (var number in numbers)
            {
                copy.Remove(number);

                if (number <= n)
                {
                    var remainder = n - number;

                    if (copy.Contains(remainder))
                    {
                        copy.Remove(remainder);

                        var pair = new int[2];
                        int key;

                        if (number < remainder)
                        {
                            pair[0] = number;
                            pair[1] = remainder;
                            key = number;
                        }
                        else
                        {
                            pair[0] = remainder;
                            pair[1] = number;
                            key = remainder;
                        }

                        if (!results.ContainsKey(key))
                        {
                            results.Add(key, pair);
                        }
                    }
                }
            }

            return results;
        }
    }
}
