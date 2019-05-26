using System;
using System.Web;
using System.Collections.Generic;
using System.Runtime.InteropServices;

//cppDLL2.dll skopiowac do "c:\Users\arlet\Documents\Visual Studio 2012\Projects\WebDLL2\WebDLL2\bin\"
// inaczej Wyjątek od HRESULT: 0x8007007E

// cppDLL3: output dir: $(SolutionDir)$(SolutionName)\bin\
// WebDLL3: References: csDLL3 (potrzebne dla using csDLL3)


namespace csDLL3
{
    public class MyCSHandler : System.Web.UI.Page
    {
        //private const string myDLLfile = "cppLib4.dll";
        private const string DLL_LOCATION = "cppDLL3.dll";

        protected static class NativeMethods
        {
            [DllImport(DLL_LOCATION, CallingConvention = CallingConvention.Cdecl, EntryPoint = "sumTwo")]
            internal static extern double sumTwo(double _var_x, double _var_y);

            [DllImport(DLL_LOCATION, CallingConvention = CallingConvention.Cdecl, EntryPoint = "getIntArray")]
            internal static extern IntPtr getIntArray(int varInt1, int varInt2, int varInt3, int varInt4);

            [DllImport(DLL_LOCATION, CallingConvention = CallingConvention.Cdecl)]
            internal static extern IntPtr GetProjectPathPtr();

            [DllImport(DLL_LOCATION, CallingConvention = CallingConvention.Cdecl)]
            internal static extern IntPtr GetVersionCharPtr();
        }


        public string myMethod2(string myData)
        {
            return "myMethod2(): " + myData;
        }

        ////////////////////////////// getProjectPath ///////////////////
        public string csGetProjectPath()
        {
            IntPtr ptr = NativeMethods.GetProjectPathPtr();
            string myVersion = Marshal.PtrToStringAnsi(ptr);
            return myVersion;
        }

        ////////////////////////////// getVersion ///////////////////
        public string csGetVersion()
        {
            IntPtr ptr = NativeMethods.GetVersionCharPtr();
            string myVersion = Marshal.PtrToStringAnsi(ptr);
            return myVersion;
        }

        ////////////////////////////// sumTwo ///////////////////
        public double csSumTwo(double d1, double d2)
        {
            double result = NativeMethods.sumTwo(d1, d2);
            return result;
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct RectSize
        {
            public int width;
            public int height;

            public RectSize(int w1, int h1)
            {
                this.width = w1;
                this.height = h1;
            }
        }

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


        // https://docs.microsoft.com/en-us/dotnet/framework/interop/marshaling-different-types-of-arrays
        // c:\Users\juzer\Documents\GitHub\Projects\csForm2i\csForm2i\cppWrapper.cs 
        ////////////////////////////// getIntArray ///////////////////
        public string csGetIntArray(string myData)
        {
            List<RectSize> rects = new List<RectSize>();
            System.Web.HttpContext.Current.Response.Write("1. rects.Count: " + rects.Count + "<br />");

            rects.Add(new RectSize(240, 300));
            rects.Add(new RectSize(330, 400));
            rects.Add(new RectSize(380, 450));
            System.Web.HttpContext.Current.Response.Write("2. rects.Count: " + rects.Count + "<br />");

            RectSize[] myRSArr = rects.ToArray();
            System.Web.HttpContext.Current.Response.Write("3. myRSArr.Length : " + myRSArr.Length + "<br />");

            // i po huj tyle tablic??
            int[] myRectsArr = new int[(myRSArr.Length * 2)];    // x2 bo dwa elementy som w RectSize
            System.Web.HttpContext.Current.Response.Write("4. myRectsArr.Length : " + myRectsArr.Length + "<br />");

            int[] myDstArr = new int[(myRSArr.Length * 5) + 0];
            System.Web.HttpContext.Current.Response.Write("5. myDstArr.Length : " + myDstArr.Length + "<br />");

            // Allocates memory from the unmanaged memory of the process.
            IntPtr myRectsArrPtr = Marshal.AllocHGlobal(Marshal.SizeOf(myRectsArr[0]) * myRectsArr.Length);
            IntPtr myDstArrPtr = Marshal.AllocHGlobal(Marshal.SizeOf(myDstArr[0]) * myDstArr.Length);

            // https://msdn.microsoft.com/en-us/library/ms146625.aspx
            // Copies data from a one-dimensional, managed 32-bit signed integer array to an unmanaged memory pointer.
            Marshal.Copy(myRectsArr, 0, myRectsArrPtr, myRectsArr.Length);
            Marshal.Copy(myDstArr, 0, myDstArrPtr, myDstArr.Length);

            //[DllImport(myDLLfile, CallingConvention = CallingConvention.Cdecl, EntryPoint = "myBlockInsert")]
            //public static extern IntPtr myBlockInsert(IntPtr hwnd, IntPtr myBlock, int myBlockDim,
            //IntPtr myDst, int myDstDim, int method);
            //pResult = myBlockInsert(hwnd, myRectsArrPtr, myRectsArr.Length, myDstArrPtr, myDstArr.Length, method);

            // teras funkcja w c++
            IntPtr pResult = NativeMethods.getIntArray(11, 256, 16385, 65535);

            //  Frees memory previously allocated from the unmanaged memory of the process
            Marshal.FreeHGlobal(myDstArrPtr);
            Marshal.FreeHGlobal(myRectsArrPtr);

            // dodac alloc i free  -- no niekoniecznie
            //IntPtr myRectsArrPtr = Marshal.AllocHGlobal(Marshal.SizeOf(myRectsArr[0]) * myRectsArr.Length);
            //IntPtr pResult = NativeMethods.getIntArray(11, 256, 16385, 65535);

            System.Web.HttpContext.Current.Response.Write("ptr.ToString(): " + pResult.ToString() + "<br />");
            int arrayLength = Marshal.ReadInt32(pResult);
            System.Web.HttpContext.Current.Response.Write("arrayLength: " + arrayLength + "<br />");
            int[] resultDestArr = new int[arrayLength];


            //Marshal.ReadByte
            // Copy(IntPtr source, int[] destination, int startIndex, int length);
            Marshal.Copy(pResult, resultDestArr, 0, arrayLength);

            foreach (int myValue in resultDestArr)
            {
                System.Web.HttpContext.Current.Response.Write(myValue + "<br />");
            }

            return ("End of csGetIntArray()");
        }

    }
}