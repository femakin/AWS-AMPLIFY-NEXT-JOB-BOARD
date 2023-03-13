import { DataStore } from "@aws-amplify/datastore";
import { ApplicantList } from "../../models";

export default async function apply(data, jobdetails) {
    try {
        await DataStore?.save(
            new ApplicantList({
                Name: `${data.name}`,
                Email: `${data.email}`,
                Message: `${data.coverletter}`,
                PortfolioLink: `${data.portfoliourl}`,
                Status: ``,
                JobID: `${jobdetails?.id}`,
            })
        );
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}
