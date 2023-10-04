import allInstances from "./Api";

export default {
    submitSitesSheet(sheet) {
        return allInstances.uploadApi.post("/sites/store", sheet);
    },
    index(){
      return allInstances.Api.get(`/sites/index`)

    },
    downloadAll() {
        return allInstances.downloadApi.get("sites/downloadAll");
    },
    getAllCascades() {
        return allInstances.downloadApi.get("sites/cascades");
    },
    importCascades(sheet)
    {
      return allInstances.Api.post("/sites/cascades", sheet);

    },
    importNodals(sheet)
    {
      return allInstances.Api.post("/sites/nodals", sheet);



    },
    downloadNodals()
    {
      return allInstances.downloadApi.get("sites/nodals/download");

    },
    searchSites(data)
    {
      return allInstances.Api.get(`/sites/search/${data}`)
    },
    getSiteDetails(siteCode)
    {
      return allInstances.Api.get(`/sites/details/${siteCode}`)
    },
    updateCascades(data)
    {
      return allInstances.Api.post("/sites/updateCascades",data)
    },
    createNewSite(data)
    {
      return allInstances.Api.post("/sites/create",data)

    },
    updateSite(data)
    {
      return allInstances.Api.post("/sites/update",data)


    },
    getBatteriesDetails(data)
    {
      return allInstances.Api.post("/instruments/siteBatteriesData",data)

    }
};
