// See https://aka.ms/new-console-template for more information
using System;
namespace Loop
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] collages = { "JMC", "KMC", "KEC", "KCC" };

            Console.WriteLine("*** for loop ***");
            // foreach loop
            foreach (string collage in collages)
            {
                Console.WriteLine(collage);
            }

            Console.WriteLine("\n*** foreach loop ***");
            //for loop
            for (int i = 0; i < collages.Length; i++)
            {
                Console.WriteLine(collages[i]);
            }

            Console.WriteLine("\n*** while loop ***");
            //while loop
            int j = 0;
            while (j < collages.Length)
            {
                Console.WriteLine(collages[j]);
                j++;
            }

            Console.WriteLine("\n *** do while loop *** ");
            // do while loop
            int k = 0;
            do
            {
                Console.WriteLine(collages[k]);
                k++;
            } while (k < collages.Length);
        }
    }
}

