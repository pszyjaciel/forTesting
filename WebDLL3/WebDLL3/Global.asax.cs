using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace DemoApp.Model
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {

        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {
            // Code that runs when an unhandled error occurs
            Exception objErr = Server.GetLastError().GetBaseException();
            string err = "<strong>Error in:</strong> " + Request.Url.ToString() + "<br />" +
                            "<strong>Error Message:</strong> " + objErr.Message.ToString() + "<br />" +
                            "<strong>Stack trace:</strong> " + Server.GetLastError().StackTrace;

            Application["MyError"] = err;
            Server.Transfer("MyErrorPage.aspx", false);
            Server.ClearError();
        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}