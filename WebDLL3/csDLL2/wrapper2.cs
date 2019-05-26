using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.InteropServices;

namespace csDLL3
{
    //class wrapper2
    //{

    // Declares a managed structure for each unmanaged structure.
    [StructLayout(LayoutKind.Sequential)]
    public struct MyPoint
    {
        public int X;
        public int Y;

        public MyPoint(int x, int y)
        {
            this.X = x;
            this.Y = y;
        }
    }

    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Ansi)]
    public struct MyPerson
    {
        public string First;
        public string Last;

        public MyPerson(string first, string last)
        {
            this.First = first;
            this.Last = last;
        }
    }

    public class LibWrap
    {
        private const string DLL_LOCATION = "cppDLL3.dll";

        // Declares a managed prototype for an array of integers by value.
        // The array size cannot be changed, but the array is copied back.
        [DllImport(DLL_LOCATION, CallingConvention = CallingConvention.Cdecl)]
        public static extern int TestArrayOfInts([In, Out] int[] array, int size);

        // Declares a managed prototype for an array of integers by reference.
        // The array size can change, but the array is not copied back 
        // automatically because the marshaler does not know the resulting size.
        // The copy must be performed manually.
        [DllImport(DLL_LOCATION, CallingConvention = CallingConvention.Cdecl)]
        public static extern int TestRefArrayOfInts(ref IntPtr array, ref int size);

        // Declares a managed prototype for a matrix of integers by value.
        [DllImport(DLL_LOCATION, CallingConvention = CallingConvention.Cdecl)]
        public static extern int TestMatrixOfInts([In, Out] int[,] pMatrix, int row);

        // Declares a managed prototype for an array of strings by value.
        [DllImport(DLL_LOCATION, CallingConvention = CallingConvention.Cdecl)]
        public static extern int TestArrayOfStrings([In, Out] string[] stringArray, int size);

        // Declares a managed prototype for an array of structures with integers.
        [DllImport(DLL_LOCATION, CallingConvention = CallingConvention.Cdecl)]
        public static extern int TestArrayOfStructs([In, Out] MyPoint[] pointArray, int size);

        // Declares a managed prototype for an array of structures with strings.
        [DllImport(DLL_LOCATION, CallingConvention = CallingConvention.Cdecl)]
        public static extern int TestArrayOfStructs2([In, Out] MyPerson[] personArray, int size);
    }
}
//}