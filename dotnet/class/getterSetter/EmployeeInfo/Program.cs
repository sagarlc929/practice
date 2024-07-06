// See https://aka.ms/new-console-template for more information
public class Program
{
    public static void Main(string[] args)
    {
        Employee myEmployee = new Employee();
        // setting values
        myEmployee.Name = "Ram";
        myEmployee.EmployeeNo = 55;
        myEmployee.Address = "Kathmandu";
        myEmployee.Email = "ram@gamil.com";
        myEmployee.DateOfBirth = new DateOnly(2000, 6, 27);

        // getting values
        Console.WriteLine(myEmployee.Name);
        Console.WriteLine(myEmployee.EmployeeNo);
        Console.WriteLine(myEmployee.Address);
        Console.WriteLine(myEmployee.Email);
        Console.WriteLine(myEmployee.DateOfBirth);
    }
}
