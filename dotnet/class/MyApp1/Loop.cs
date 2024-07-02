class Loop 
{
  public void Demo(){
    string[] collages = {"JMC", "KMC", "KEC", "KCC"};

    Console.WriteLine("*** foreach loop **");
    // foreach loop
    foreach(string collage in collages){
      Console.WriteLine(collage);
    }

    Console.WriteLine("\n*** for loop **");
    //for loop
    for(int index = 0; index < collages.Length; index++){
      Console.WriteLine(collages[index]);
    }

    Console.WriteLine("\n*** while loop **");
    //while loop
    int i = 0;
    while(i < collages.Length){
      Console.WriteLine(collages[i]);
      i++;
    }

    Console.WriteLine("\n ** do while *** ");
    //do while
    int j = 0;
    do {
      Console.WriteLine(collages[j]);
      j++;
    }while(j < collages.Length);
  }
}
