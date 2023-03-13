import { DataStore } from "@aws-amplify/datastore";
import {JobList } from "../../../Backend/Backend/models";

async function getData() {
    const res = await DataStore?.query(JobList)
    return res
}

export default getData



