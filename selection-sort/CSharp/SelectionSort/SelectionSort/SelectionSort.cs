
namespace SelectionSort
{
    public static class SelectionSort
    {
        public static int[] Sort(int[] array)
        {
            for (var i = 0; i < array.Length; i++)
            {
                var currentMinIndex = i;
                for (var j = currentMinIndex; j < array.Length; j++)
                {
                    if (array[j] < array[currentMinIndex])
                    {
                        currentMinIndex = j;
                    }
                }

                if (currentMinIndex != i)
                {
                    var originalMinValue = array[i];
                    array[i] = array[currentMinIndex];
                    array[currentMinIndex] = originalMinValue;
                }
            }

            return array;
        }
    }
}
