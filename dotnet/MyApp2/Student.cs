public class Employee {
  // member variable
  private string name;
  private int employeeNo;
  private string address;
  private string email;
  private string dateOfBirth;
  
  // property
  public string Name 
  {
    get{
      return name;
    }
    set{
     name = value; 
    }
  }

  public int EmployeeNo
  {
    get{
      return employeeNo;
    }
    set{
      employeeNo = value;
    }
  }

  public string Address
  {
    get{
      return address;
    }
    set{
      address = value;
    }
  }

  public string Email
  {
    get{
      return email;
    }
    set{
      email = value;
    }
  }
  private string DateOfBirth
  {
    get{
      return dateOfBirth;
    }
  }

}
