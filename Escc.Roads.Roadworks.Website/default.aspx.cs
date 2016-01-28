using System;
using System.Web;
using eastsussexgovuk.webservices.TextXhtml.HouseStyle;
using EsccWebTeam.Data.Web;

namespace Escc.Roads.Roadworks.Website
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

            var policy = new ContentSecurityPolicy(HttpContext.Current.Request.Url);
            policy.AppendFromConfig("GoogleMaps");
            policy.AppendFromConfig("Roadworks");
            policy.UpdateHeader(System.Web.HttpContext.Current.Response);
        }
    }
}
