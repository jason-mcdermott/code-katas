using System.Collections.Generic;

namespace CountingSort
{
    public static class CountingSort
    {
        public static int[] Sort(int[] numbers)
        {
            var tally = new Dictionary<int, int>();
            var sorted = new List<int>();

            foreach(var value in numbers)
            {
                if (tally.ContainsKey(value))
                {
                    var sum = tally[value];
                    tally[value] = sum + 1;
                }
                else
                {
                    tally[value] = 1;
                }
            }
            
            for (var i = 1; i <= numbers.Length; i++)
            {
                if (tally.ContainsKey(i))
                {
                    var values = tally[i];
                    for (var j = 0; j < values; j++)
                    {
                        sorted.Add(i);
                    }
                }
            }

            return sorted.ToArray();
        }
    }
}
