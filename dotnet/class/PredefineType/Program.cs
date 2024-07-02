// See https://aka.ms/new-console-template for more information
using System;

namespace PredefineType{
  class Program 
  {
    static void Main(string[] args)
    {
      string message = "Hello world";
      string upperMessage = message.ToUpper();
      Console.WriteLine (upperMessage);// Hello  world2015

      int x = 2015;
      message = message + x.ToString();
      Console.WriteLine (message);

      bool simpleVar = false;
      if (simpleVar) 
        Console.WriteLine("This will not print");

      x = 5000;
      bool lessThanAMile = x < 5280;
      if (lessThanAMile)
        Console.WriteLine ("This will print");
    }
  }
}
