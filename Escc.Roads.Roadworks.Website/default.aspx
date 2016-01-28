<%@ Page language="c#" Codebehind="default.aspx.cs" AutoEventWireup="True" Inherits="Escc.Roads.Roadworks.Website.map" %>

<asp:Content runat="server" ContentPlaceHolderID="metadata">
	<Metadata:MetadataControl id="headContent" runat="server" 
		title="Roadworks map" 
        ipsvPreferredTerms="Road works;Road and pathway maintenance" 
        ipsvNonPreferredTerms="Highway repairs;Road repairs;Street repairs;Street works;Streetworks;Road maintenance" 
        lgslNumbers="569" 
        creator="Traffic Management, T&amp;E. Phone: 01273 482272" 
		lgtltype="Road network maps" 
		/>
    <ClientDependency:Css runat="server" Files="RoadworksMap" />
</asp:Content>

<asp:Content runat="server" ContentPlaceHolderID="fullScreenHeading">Roadworks map</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="fullScreenLinks"><p><a href="/roadsandtransport/roads/roadworks/">Back to roadworks</a></p></asp:Content>

<asp:Content runat="server" ContentPlaceHolderID="afterForm">
    <div id="erw-container" class="ElginRoadworksWidget">
    <noscript> 
        <p>Our roadworks map uses JavaScript, but you don't have it enabled.</p>
        <p>Find out <a href="http://enable-javascript.com/">how to enable JavaScript in your browser</a>.</p>
    </noscript>
    </div>
</asp:content>

<asp:Content runat="server" ContentPlaceHolderID="javascript">
    <script src="https://portal.roadworks.org/embed/loader.js"></script>

    <ClientDependency:Script runat="server" Files="RoadworksMap" />
</asp:content>