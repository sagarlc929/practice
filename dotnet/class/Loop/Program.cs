// See https://aka.ms/new-console-template for more information
using System;
namespace Loop
{
  class Program 
  {
    static void Main(string [] args)
    {
      string[] collages = {"JMC", "KMC", "KEC", "KCC"};

      Console.WriteLine("*** foreach loop **");
      // foreach loop
      foreach(string collage in collages){
        Console.WriteLine(collage);
      }

      Console.WriteLine("\n*** foreach loop **");
      //for loop
      for(int i = 0; i < collages.Length; i++){
        Console.WriteLine(collages[i]);
      }

      Console.WriteLine("\n*** while loop **");
      //while loop
      int i = 0;
      while(i < collages.Length){
        Console.WriteLine(collages[i]);
        i++;
      }

      Console.WriteLine("\n ** ")
    }
  }
}

