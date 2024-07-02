// See https://aka.ms/new-console-template for more information
using System;
public class Program
{
    public static void Main(string[] args)
    {
        Student myStudent = new Student();
        myStudent.Name();
        //dynamic polymorphism
        Person abcStudent = new Student();
        abcStudent.Name();
        /*
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
           foreach (string affiliatedBy in myCollege.AffiliatedBy)
           {
           Console.WriteLine(affiliatedBy);
           }
           foreach (string faculty in myCollege.Faculty)
           {
           Console.WriteLine(faculty);
           }
           Console.WriteLine(myCollege.NoOfStudents);
           Console.WriteLine(myCollege.Type);
           foreach (string program in myCollege.Program)
           {
           Console.WriteLine(program);
           }
           Console.WriteLine(myCollege.Code);
           Console.WriteLine(myCollege.Name);
           Console.WriteLine(myCollege.Address);
           Console.WriteLine(myCollege.Email);
           Console.WriteLine(myCollege.ContactNo);
           Console.WriteLine(myCollege.EstdDate);
           Console.WriteLine(myCollege.Chief);
        */
    }
}
