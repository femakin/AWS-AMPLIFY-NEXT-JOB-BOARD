import { Amplify } from "aws-amplify";
import awsconfig from "../../Backend/Backend/aws-exports";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Jobdetails from "@/components/JobDetails/Jobdetails";
import getData from "./api/getdata";

Amplify.configure({ ...awsconfig, ssr: true });

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
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
