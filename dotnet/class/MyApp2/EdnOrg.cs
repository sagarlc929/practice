public class EdnOrg : Organization
{
  private string type;
  private string[] program;

  public string Type{
    get{
      return type;
    }
    set{
      type = value;
    }
  }
  public string[] Program
  {
    get{
      return program;
    }
    set{
      program = value;
    }
  } 
}
