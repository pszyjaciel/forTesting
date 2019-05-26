using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using csDLL3;
using System.Runtime.InteropServices;

// https://docs.microsoft.com/en-us/dotnet/framework/interop/marshaling-data-with-platform-invoke#pinvokelibdll
// https://docs.microsoft.com/en-us/dotnet/framework/interop/marshaling-different-types-of-arrays

namespace DemoApp.Model
{
    public partial class WebPinvokeLib : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // array ByVal 
            int[] array1 = new int[10];
            Response.Write("Integer array passed ByVal before call: " + "<br />");
            for (int i = 0; i < array1.Length; i++)
            {
                array1[i] = i;
                Response.Write(" " + array1[i]);
            }

            int sum1 = LibWrap.TestArrayOfInts(array1, array1.Length);
            Response.Write("<br />Sum of elements: " + sum1 + "<br />");
            Response.Write("<br />Integer array passed ByVal after call: " + "<br />");

            foreach (int i in array1)
            {
                Response.Write(" " + i);
            }

            // array ByRef 
            int[] array2 = new int[10];
            int size = array2.Length;
            Response.Write("<br /><br />Integer array passed ByRef before call: " + "<br />");
            for (int i = 0; i < array2.Length; i++)
            {
                array2[i] = i;
                Response.Write(" " + array2[i]);
            }

            IntPtr buffer = Marshal.AllocCoTaskMem(Marshal.SizeOf(size) * array2.Length);
            Marshal.Copy(array2, 0, buffer, array2.Length);

            int sum2 = LibWrap.TestRefArrayOfInts(ref buffer, ref size);
            Response.Write("<br />Sum of elements: " + sum2 + "<br />");
            if (size > 0)
            {
                int[] arrayRes = new int[size];
                Marshal.Copy(buffer, arrayRes, 0, size);
                Marshal.FreeCoTaskMem(buffer);
                Response.Write("<br />Integer array passed ByRef after call: " + "<br />");
                foreach (int i in arrayRes)
                {
                    Response.Write(" " + i);
                }
            }
            else
            {
                Response.Write("<br />Array after call is empty " + "<br />");
            }

            // matrix ByVal 
            const int DIM = 5;
            int[,] matrix = new int[DIM, DIM];

            Response.Write("<br /><br />Matrix before call: " + "<br />");
            for (int i = 0; i < DIM; i++)
            {
                for (int j = 0; j < DIM; j++)
                {
                    matrix[i, j] = j;
                    Response.Write(" " + matrix[i, j]);
                }

                Response.Write("");
            }

            int sum3 = LibWrap.TestMatrixOfInts(matrix, DIM);
            Response.Write("<br />Sum of elements: " + sum3 + "<br />");
            Response.Write("<br />Matrix after call: " + "<br />");
            for (int i = 0; i < DIM; i++)
            {
                for (int j = 0; j < DIM; j++)
                {
                    Response.Write(" " + matrix[i, j]);
                }

                Response.Write("" + "<br />");
            }

            // string array ByVal 
            string[] strArray = { "one", "two", "three", "four", "five" };
            Response.Write("<br /><br />string array before call: " + "<br />");
            foreach (string s in strArray)
            {
                Response.Write(" " + s);
            }

            int lenSum = LibWrap.TestArrayOfStrings(strArray, strArray.Length);
            Response.Write("<br />Sum of string lengths: " + lenSum + "<br />");
            Response.Write("<br />string array after call: " + "<br />");
            foreach (string s in strArray)
            {
                Response.Write(" " + s);
            }

            // struct array ByVal 
            MyPoint[] points = { new MyPoint(1, 1), new MyPoint(2, 2), new MyPoint(3, 3) };
            Response.Write("<br /><br />Points array before call: " + "<br />");
            foreach (MyPoint p in points)
            {
                // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated
                Response.Write("X = " + p.X + ", Y = " + p.Y + "; ");
                // Console.WriteLine($"X = {p.X}, Y = {p.Y}");
            }

            int allSum = LibWrap.TestArrayOfStructs(points, points.Length);
            Response.Write("<br />Sum of points: " + allSum + "<br />");
            Response.Write("<br />Points array after call: " + "<br />");
            foreach (MyPoint p in points)
            {
                Response.Write("X = " + p.X + ", Y = " + p.Y + "; ");
            }

            // struct with strings array ByVal 
            MyPerson[] persons =
        {
            new MyPerson("Kim", "Akers"),
            new MyPerson("Adam", "Barr"),
            new MyPerson("Jo", "Brown")
        };

            Response.Write("<br /><br />Persons array before call:" + "<br />");
            foreach (MyPerson pe in persons)
            {
                Response.Write("First = " + pe.First + ", Last = " + pe.Last + "; ");
            }

            int namesSum = LibWrap.TestArrayOfStructs2(persons, persons.Length);
            Response.Write("<br />Sum of name lengths:" + namesSum + "<br />");
            Response.Write("<br /><br />Persons array after call:" + "<br />");
            foreach (MyPerson pe in persons)
            {
                //Console.WriteLine($"First = {pe.First}, Last = {pe.Last}");
                Response.Write("First = " + pe.First + ", Last = " + pe.Last + "; ");
            }
        }
    }
}

