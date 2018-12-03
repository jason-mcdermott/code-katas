
namespace SumEvenValuesOfFibonacci
{
    public class SumEvens
    {
        private static int _max = 4000000;
        public static int SumFibonacci(int max)
        {
            int a = 1;
            int b = 2;
            int sum = b;
            int temp = 0;

            while (a + b <= max)
            {
                temp = a + b;
                a = b;
                b = temp;

                if (temp % 2 == 0)
                {
                    sum += temp;
                }
            }

            return sum;
        }

        public static int RecursiveSumFibonacci(int a, int b, int sum)
        {
            if (a + b >= _max)
            {
                return sum;
            }

            int temp = a + b;
            a = b;
            b = temp;

            if (temp % 2 == 0)
            {
                sum += temp;
            }

            return RecursiveSumFibonacci(a, b, sum);
        }
    }
}
