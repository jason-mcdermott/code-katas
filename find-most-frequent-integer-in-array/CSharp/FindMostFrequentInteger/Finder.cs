using System.Collections.Generic;
using System.Linq;

namespace FindMostFrequentInteger
{
    public class Finder
    {
        public KeyValuePair<int, int> Count(int[] numbers)
        {
            var result = new Dictionary<int, int>();

            foreach (var num in numbers)
            {
                if (result.ContainsKey(num))
                {
                    var value = result[num];
                    result[num] = value + 1;
                }
                else
                {
                    result[num] = 1;
                }
            }

            return result.OrderByDescending(r => r.Value).First();
        }
    }
}
