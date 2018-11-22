using System;

namespace CheckForSequence
{
    public static class Finder
    {
        public static bool Search(string sample, string target)
        {
            int start = 0;
            for (int i = 0; i < target.Length; i++)
            {
                var current = target[i];
                for (int j = start; j < sample.Length; j++)
                {
                    if (!current.Equals(Char.ToUpper(sample[j])))
                    {
                        continue;
                    }
                    else
                    {
                        start = j + 1;
                        // if we've reached the end...
                        if (i == target.Length - 1)
                        {
                            // then we found a match
                            return true;
                        }

                        break;
                    }
                }
            }

            // if we got here, then no match...
            return false;
        }
    }
}