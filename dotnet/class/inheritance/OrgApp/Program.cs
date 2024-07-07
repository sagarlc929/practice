// See https://aka.ms/new-console-template for more information
using System;
public class Program
{
    public static void Main(string[] args)
    {
        College myCollege = new College();
        myCollege.AffiliatedBy = new string[] { "Tribhuban Univerisity", "Kathmandu Univerisity" };
        myCollege.Faculty = new string[] { "education", "commerce", "law" };
        myCollege.NoOfStudents = 50;
        myCollege.Type = "public";
        myCollege.Program = new string[] { "humanity", "science and technonlogy" };
        myCollege.Code = "coll-01";
        myCollege.Name = "Janamaitri Multiple Campus";
        myCollege.Address = "kuleshwor";
        myCollege.Email = "sagarlamichhane@gmail.com";
        myCollege.ContactNo = "98765443";
        myCollege.EstdDate = new DateOnly(2022, 2, 22);
        myCollege.Chief = "Jon Doe";

        Console.WriteLine("Affiliated By:");
        foreach (string affiliatedBy in myCollege.AffiliatedBy)
        {
            Console.WriteLine(affiliatedBy);
        }

        Console.WriteLine("\nFacultys:");
        foreach (string faculty in myCollege.Faculty)
        {
            Console.WriteLine(faculty);
        }


        Console.WriteLine("\nPrograms:");
        foreach (string program in myCollege.Program)
        {
            Console.WriteLine(program);
        }
        Console.WriteLine("\nType:" + myCollege.Type);
        Console.WriteLine("No of students: " + myCollege.NoOfStudents);
        Console.WriteLine("Code: " + myCollege.Code);
        Console.WriteLine("Name: " + myCollege.Name);
        Console.WriteLine("Address: " + myCollege.Address);
        Console.WriteLine("Email: " + myCollege.Email);
        Console.WriteLine("Contact No: " + myCollege.ContactNo);
        Console.WriteLine("Established Date:" + myCollege.EstdDate);
        Console.WriteLine("Chief Name:" + myCollege.Chief);
    }
}
