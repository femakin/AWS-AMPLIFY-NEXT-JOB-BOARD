import { Amplify } from "aws-amplify";
 import awsconfig from "../aws-exports";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Jobdetails from "@/components/JobDetails/Jobdetails";
 import getData from "./api/getdata";
import { DataStore } from "@aws-amplify/datastore";
import { ApplicantList, JobList } from "@/models";

 Amplify.configure({ ...awsconfig, ssr: true });

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
             const result = await getData();

            // const result = await DataStore?.query(JobList);

            setData(result);
        };
        fetchData();
    }, [data]);

    return (
        <div className={styles.home_container}>
            <Navbar />
            {data && <Jobdetails data={data} />}
        </div>
    );
}

export default Home;
