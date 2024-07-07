/*
Collage
+ AffiliatedBy
+ Faculty[]
+ NoOfStudent
*/
public class College : EdnOrg
{
  private string[] affiliatedBy;
  private string[] faculty;
  private int noOfStudents;

  public string[] AffiliatedBy{
    get{
      return affiliatedBy;
    }
    set{
      affiliatedBy = value;
    }
  }

  public string[] Faculty
  {
    get{
      return faculty;
    }
    set{
      faculty = value;
    }
  } 

  public int NoOfStudents{
    get{
      return noOfStudents;
    }
    set{
      noOfStudents = value;
    }
  }
}
