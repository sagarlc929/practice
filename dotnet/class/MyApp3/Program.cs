// See https://aka.ms/new-console-template for more information
using System;
class Program
{
    static void Main()
    {
        /*
           WeekDay myWeekDay = new WeekDay();
           Console.WriteLine(myWeekDay.WeekDayEnum.Sunday);
           Console.WriteLine((int)myWeekDay.WeekDayEnum.Sunday);
         */
        MySum newMySumInt = new MySum(2, 4);
        MySum newMySumFloat = new MySum(2.5, 4.7);
    }
}
