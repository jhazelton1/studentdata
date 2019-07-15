using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Entity;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    public class StudentController : Controller
    {
        string[] StudentFileLines = System.IO.File.ReadAllLines(@".\student-mat.csv");

        [HttpGet("[action]")]
        public List<Student> GetStudents()
        {

            List<Student> students = new List<Student>();

            for (int i = 1; i < StudentFileLines.Length; i++)
            {
                string[] studentInfo = StudentFileLines[i].Split(new char[] { '"', ';' }).Where(j => j != "").Select(j => j.Trim()).ToArray();
                PropertyInfo[] studentProperties = typeof(Student).GetProperties();
                Student student = new Student();

                for (int j = 0; j < studentInfo.Length; j++)
                {
                    if (j == 0)
                    {
                        studentProperties[j].SetValue(student, i);
                    }
                    else if (studentProperties[j + 1].PropertyType == typeof(int))
                    {
                        studentProperties[j + 1].SetValue(student, Int32.Parse(studentInfo[j]));
                    }
                    else if (studentProperties[j + 1].PropertyType == typeof(bool))
                    {
                        studentProperties[j + 1].SetValue(student, studentInfo[j].Equals("yes"));
                    }
                    else
                    {
                        studentProperties[j + 1].SetValue(student, studentInfo[j]);
                    }

                }

                students.Add(student);

            }

            return students;

        }

    }
}
