using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using csDLL3;

// shortcuts:  Tools / Options / Environment / Keyboard 


namespace DemoApp.Model
{
    public partial class _Default : System.Web.UI.Page
    {
        private MyCSHandler mcsh;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                mcsh = new MyCSHandler();
                //Label1.Text = mcsh.myMethod2("data from Page_Load");
                mcsh.csGetIntArray("sztrink");
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            try
            {
                double val1 = double.Parse(TextBox1.Text);
                double val2 = double.Parse(TextBox2.Text);

                double rs = mcsh.csSumTwo(val1, val2);
                Label3.Text = "sum: " + rs.ToString();

                string version = mcsh.csGetVersion();
                //IntPtr intPtr = Model.MyCSHandler.ImportLibrary.GetVersionCharPtr();
                //string version = System.Runtime.InteropServices.Marshal.PtrToStringAnsi(intPtr);
                Label4.Text = version + "<br />";
                Label4.Text += mcsh.csGetProjectPath();

            }
            catch (Exception ex)
            {
                Response.Write(ex.Message + "<br />");
            }
        }
    }
}