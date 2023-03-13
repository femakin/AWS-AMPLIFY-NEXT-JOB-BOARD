import { DataStore } from "@aws-amplify/datastore";
import { JobList } from "../../models";

export default async function addnewjob(data) {
    try {
        await DataStore.save(
            new JobList({
                JobPosition: `${data.jobPosition}`,
                Category: `${data.Category}`,
                Location: `${data.Location}`,
                Experience: `${data.Experience}`,
                JobStatus: `${data.JobStatus}`,
                Agency: `${data.Agency}`,
                Description: `${data.Description}`,
            })
        );
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}
