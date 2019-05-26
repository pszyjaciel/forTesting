using System;
using System.Web;
using System.Collections.Generic;
using System.Runtime.InteropServices;

//cppDLL2.dll skopiowac do "c:\Users\arlet\Documents\Visual Studio 2012\Projects\WebDLL2\WebDLL2\bin\"
// inaczej Wyjątek od HRESULT: 0x8007007E
 
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

        // c:\Users\juzer\Documents\GitHub\Projects\csForm2i\csForm2i\cppWrapper.cs 
        ////////////////////////////// getIntArray ///////////////////
        public string csGetIntArray(string myData)
        {
            // dodac alloc i free
            //IntPtr myRectsArrPtr = Marshal.AllocHGlobal(Marshal.SizeOf(myRectsArr[0]) * myRectsArr.Length);
            IntPtr pResult = NativeMethods.getIntArray(11, 256, 16385, 65535);
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