
namespace FindLargestInteger
{
    public class Finder
    {
        public int FindLargest(int[] numbers)
        {
            for (int i = 0; i < numbers.Length; i++)
            {
                if (i + 1 < numbers.Length)
                {
                    var next = numbers[i + 1];
                    var current = numbers[i];
                    if (current > next)
                    {
                        Swap(i, numbers);
                    }
                }
            }

            return numbers[numbers.Length-1];
        }

        private void Swap(int index, int[] array)
        {
            var next = array[index + 1];
            var current = array[index];
            array[index] = next;
            array[index + 1] = current;
        }
    }
}
