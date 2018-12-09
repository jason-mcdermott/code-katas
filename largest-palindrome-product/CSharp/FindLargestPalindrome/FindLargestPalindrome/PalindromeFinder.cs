using System.Linq;

namespace FindLargestPalindrome
{
    public class PalindromeFinder
    {
        public static string Find()
        {
            for (int i = 999; i >= 100; i--)
            {
                int a = i * i;
                int b = i * (i - 1);

                if (IsPalindrome(a))
                {
                    return $"{a} = {i} * {i}";
                }
                else if (IsPalindrome(b))
                {
                    return $"{b} = {i} * {i - 1}";
                }
            }

            return string.Empty;
        }

        private static bool IsPalindrome(int number)
        {
            var input = number.ToString().ToCharArray();
            var left = input.Take(input.Length / 2).ToArray();
            var midpoint = input.Length % 2 == 0 ? left.Length : left.Length + 1;
            var right = input.Skip(midpoint).Take(input.Length / 2).ToArray();
            
            int i = 0;
            int j = right.Length - 1;

            while (i < left.Length && j < right.Length)
            {
                if (left[i] != right[j])
                {
                    return false;
                }
                i++;
                j--;
                continue;
            }

            return true;
        }
    }
}
