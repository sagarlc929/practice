/*
+ pubCode
+ Name
+ Address
+ Email
+ ContactNo
+ EstdDate
+ Chief
*/
public class Organization{
  private string code;
  private string name;
  private string address;
  private string email;
  private string contactNo;
  private DateOnly estdDate;
  private string chief;

  public string Code{
    get{
      return code;
    }
    set{
      code = value;
    }
  }
  public  string Name
  {
    get{
      return name;
    }
    set{
      name = value;
    }
  }
  public  string Address
  {
    get{
      return address;
    }
    set{
      address = value;
    }
  }
  public  string Email
  {
    get{
      return email;
    }
    set{
      email = value;
    }
  }
  public  string ContactNo
  {
    get{
      return contactNo;
    }
    set{
      contactNo = value;
    }
  }
  public DateOnly EstdDate
  {
    get{
      return estdDate;
    }
    set{
      estdDate = value;
    }
  }
  public  string Chief
  {
    get{
      return chief;
    }
    set{
      chief = value;
    }
  }
} 


