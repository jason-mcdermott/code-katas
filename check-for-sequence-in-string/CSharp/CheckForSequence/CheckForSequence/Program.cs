using System;

namespace CheckForSequence
{
    class Program
    {
        static void Main(string[] args)
        {
            // CHALLENGE: Determine if the sequence of characters of the sample string 
            //            occurs in the same order in the longer text string. 

            string sample = "abcNjhgAhGjhfhAljhRkhgRbhjbevfho";
            string target = "NAGARRO";

            Console.WriteLine($"Sequence was found: {Finder.Search(sample, target)}");
        }
    }
}
