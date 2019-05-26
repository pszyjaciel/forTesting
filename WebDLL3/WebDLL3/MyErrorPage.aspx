<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MyErrorPage.aspx.cs" Inherits="DemoApp.Model.MyErrorPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>My error page</title>
    <style type="text/css">
        form
        {
            font-size: smaller;
            font-family: Consolas, monospace;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <h3>This is my own error handler.</h3>
            <asp:Label ID="FriendlyErrorMsg" runat="server" Text="">
            </asp:Label>

            <asp:Label ID="Label1" runat="server"
                Text="<br /><br />======== END OF ERROR =======<br />"></asp:Label>

        </div>
    </form>
</body>
</html>

