using System;
using eastsussexgovuk.webservices.TextXhtml.HouseStyle;

namespace Escc.Roadworks.Website
{
    /// <summary>
    /// Summary description for map.
    /// </summary>
    public partial class map : System.Web.UI.Page
    {
        protected void Page_Load(object sender, System.EventArgs e)
        {
            // Since content refreshed every 15 mins, set date modified of content to today
            this.headContent.DateModified = DateTimeFormatter.ISODate(DateTime.Today);
        }
    }
}
