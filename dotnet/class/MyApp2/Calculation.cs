public class Calculation
{
  private float number1;
  private float number2;

  public float Number1{
    get{
      return number1;
    }
    set{
      number1 = value;
    }
  }
  public float Number2{
    get{
      return number2;
    }
    set{
      number2 = value; }
  }
  public float Add(){
      return number1 + number2;
  }
  public float Sub(){
    return number1 - number2;
  }
  public float Mul(){
    return number1 * number2;
  }
  public float Div(){
    return number1 / number2;
  }
  public float Mod(){
    return number1 % number2;
  }
}

