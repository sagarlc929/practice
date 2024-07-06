public class Employee
{
    // member variable
    private string name;
    private int employeeNo;
    private string address;
    private string email;
    private DateOnly dateOfBirth;

    // property
    public string Name
    {
        get
        {
            return name;
        }
        set
        {
            name = value;
        }
    }

    public int EmployeeNo
    {
        get
        {
            return employeeNo;
        }
        set
        {
            employeeNo = value;
        }
    }

    public string Address
    {
        get
        {
            return address;
        }
        set
        {
            address = value;
        }
    }

    public string Email
    {
        get
        {
            return email;
        }
        set
        {
            email = value;
        }
    }
    public DateOnly DateOfBirth
    {
        get
        {
            return dateOfBirth;
        }
        set
        {
            dateOfBirth = value;
        }
    }

}
