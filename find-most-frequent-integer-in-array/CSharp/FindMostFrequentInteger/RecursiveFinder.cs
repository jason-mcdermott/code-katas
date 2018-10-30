using System.Collections.Generic;
using System.Linq;

namespace FindMostFrequentInteger
{
    public class RecursiveFinder
    {
        private Dictionary<int, int> result = new Dictionary<int, int>();
        
        public KeyValuePair<int, int> Count(int index, List<int> numbers)
        {
            if (!numbers.Any())
            {
                return result.OrderByDescending(r => r.Value).First();
            }

            var num = numbers[index];

            if (result.ContainsKey(num))
            {
                var value = result[num];
                result[num] = value + 1;
            }
            else
            {
                result[num] = 1;
            }

            numbers.RemoveAt(0);

            Count(0, numbers);

            return result.OrderByDescending(r => r.Value).First();
        }
    }
}
