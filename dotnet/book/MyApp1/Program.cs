// See https://aka.ms/new-console-template for more information
Panda p1 = new Panda("Pan Dee");
Panda p2 = new Panda("Pan Dah");

Console.WriteLine(p1.Name); // Pan Dee
Console.WriteLine(p2.Name); // Pan Dah

Console.WriteLine()

/*
UnitConverter feetToInchesConverter = new UnitConverter(12);
UnitConverter milesToFeetConverter = new UnitConverter(5280);

Console.WriteLine(feetToInchesConverter.Convert(30)); // 360
Console.WriteLine(feetToInchesConverter.Convert(100)); // 1200

Console.WriteLine(feetToInchesConverter.Convert(
      milesToFeetConverter.Convert(1))); // 63360
public class UnitConverter
{
  int ratio; // Field

  public UnitConverter(int unitRatio) // Constructor
  {
    ratio = unitRatio;
  }
  public int Convert(int unit)
  { // Method
    return unit * ratio;
  }
}
*/
