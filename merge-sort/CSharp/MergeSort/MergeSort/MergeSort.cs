using System.Collections.Generic;

namespace MergeSort
{
    public static class MergeSort
    {
        public static List<int> Sort(List<int> items)
        {
            if (items.Count <= 1)
            {
                return items;
            }

            var middle = items.Count / 2;
            var left = items.GetRange(0, middle);
            var right = items.GetRange(middle, items.Count - middle);

            return Merge(Sort(left), Sort(right));
        }

        private static List<int> Merge(List<int> left, List<int> right)
        {
            var result = new List<int>();

            while (left.Count > 0 || right.Count > 0)
            {
                if (left.Count > 0 && right.Count > 0)
                {
                    if (left[0] < right[0])
                    {
                        result.Add(left[0]);
                        left.RemoveAt(0);
                    }
                    else
                    {
                        result.Add(right[0]);
                        right.RemoveAt(0);
                    }
                }
                else if (left.Count > 0)
                {
                    result.Add(left[0]);
                    left.RemoveAt(0);
                }
                else
                {
                    result.Add(right[0]);
                    right.RemoveAt(0);
                }
            }
            return result;
        }
    }
}
