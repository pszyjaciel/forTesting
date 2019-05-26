#define DEBUG
//#undef DEBUG

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DemoApp.Model
{
    public partial class MyErrorPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
#if DEBUG
            string myError = Application["MyError"].ToString();
            //string myError = Request.QueryString["Application_Error"];
            if (myError == null)
            {
                Response.Write("myError jest nulem." + "<br />");
                return;
            }
            //Response.Write(myError);
            FriendlyErrorMsg.Text = myError;
#else
            FriendlyErrorMsg.Text = "kucha..";
#endif
        }
    }
}