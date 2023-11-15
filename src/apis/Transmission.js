import allInstances from "./Api";
export default{
    getSiteTxIssues(data)
    {
        return allInstances.Api.post("/Transmission/getSiteTXIssues",data)
    },
    searchTxIssues(fromDate,toDate,issue)
    {
        return allInstances.Api.get(`/Transmission/searchTxIssues/${fromDate}/${toDate}/${issue}`);

    },
    updateSiteWAN(data)
    {
        return allInstances.Api.post("/Transmission/updateSiteWAN",data)

    },
    updateSiteXPIC(data)
    {
        return allInstances.Api.post("/Transmission/updateSiteXPICs",data)

    },
    updateSiteIPTraffic(data)
    {
        return allInstances.Api.post("/Transmission/updateSiteIP_trafics",data) 

    },
    addNewXPIC(data)
    {
        return allInstances.Api.post("/Transmission/storeSiteXPICs",data)

    },
    addNewWAN(data)
    {
        return allInstances.Api.post("/Transmission/storeSiteWAN",data)

    },
    addNewIPTraffic(data)
    {
        return allInstances.Api.post("/Transmission/storeSiteIP_trafic",data)

    }
  
}