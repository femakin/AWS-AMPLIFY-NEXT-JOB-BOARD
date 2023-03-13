// "use client"
import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
// import awsconfig from "../../Backend/Backend/aws-exports";
import awsconfig from "../aws-exports";
import { useRouter } from "next/navigation";
import { Auth } from "aws-amplify";
import styles from "../styles/Home.module.css";
import { DataStore } from "@aws-amplify/datastore";
// import { ApplicantList, JobList} from "../models";
import Image from "next/image";
import Swal from "sweetalert2";
import Navbar from "@/components/Navbar/Navbar";
// import addnewjob from "./api/addnewjob";
import { JobList } from "@/models";

Amplify.configure({ ...awsconfig, ssr: true });

async function getData() {
    const res = await DataStore?.query(ApplicantList);
    return res;
}

function Admin({ signOut, user }) {
    const [data, setData] = useState([]);
    const router = useRouter();
    const [state, setState] = useState({
        jobPosition: "",
        Category: "",
        Location: "",
        Experience: " ",
        JobStatus: " ",
        Agency: " ",
        Description: " ",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value,
        }));
    };

    const HandleLogout = () => {
        signOut();
        router.push("/");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const res = await addnewjob(state);
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
        ).then(savedItem => {
            // console.log('Item saved successfully:', savedItem);
            Swal.fire({
                title: "Application successfully",
                showConfirmButton: true,
                confirmButtonText: "Ok",
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push("/");
                }
            });
        }).catch(error => {
            console.error('Error saving item:', error);
        })

        if (res.success) {
            Swal.fire({
                title: "Job added successfully",
                showConfirmButton: true,
                confirmButtonText: "Ok",
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push("/");
                }
            });
        } else {
            console.log(res.error);
        }
    };

    useEffect(() => {
        Auth.currentAuthenticatedUser({
            bypassCache: false,
        })
            .then((user) => {
                // console.log(user.attributes, 'attributess')
                if (user.attributes.email !== 'femiakinyemi65@gmail.com') {
                    router.push("/applicant");
                }
            })
            .catch((err) => console.log(err));

        const fetchData = async () => {
            const result = await getData();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className={styles.home_container}>
                <Navbar />
                <div className="container">
                    <button
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                        onClick={() => HandleLogout()}
                    >
                        Signout
                    </button>

                    <div
                        className="row"
                        style={{
                            marginTop: "50px",
                        }}
                    >
                        <div className="col-md-6">
                            <h1>Add JOB</h1>

                            <form onSubmit={handleSubmit}>
                                <label htmlFor="jobPosition">jobPosition:</label>
                                <input
                                    type="text"
                                    required
                                    id="jobPosition"
                                    name="jobPosition"
                                    value={state.jobPosition}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="Category">Category:</label>
                                <input
                                    type="text"
                                    required
                                    id="Category"
                                    name="Category"
                                    value={state.Category}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="Location">Location:</label>
                                <input
                                    type="text"
                                    required
                                    id="Location"
                                    name="Location"
                                    value={state.Location}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="Experience">Experience:</label>
                                <input
                                    type="text"
                                    id="Experience"
                                    required
                                    name="Experience"
                                    value={state.Experience}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="JobStatus">Job Status:</label>
                                <input
                                    type="text"
                                    id="JobStatus"
                                    required
                                    name="JobStatus"
                                    value={state.JobStatus}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="Agency">Agency:</label>
                                <input
                                    type="text"
                                    id="Agency"
                                    required
                                    name="Agency"
                                    value={state.Agency}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="Description">Description:</label>
                                <input
                                    type="text"
                                    id="Description"
                                    required
                                    name="Description"
                                    value={state.Description}
                                    onChange={handleInputChange}
                                />

                                <input type="submit" value="Submit" />
                            </form>
                        </div>

                        <div className="col-md-6">
                            <div>
                                <h2>Applications</h2>

                                {
                                    <section className="items-section">
                                        <div className="items-container">
                                            {data?.map((x, i) => {
                                                return (
                                                    <div key={i}>
                                                        <div className="item-card">
                                                            <Image
                                                                src="https://picsum.photos/id/20/500/300"
                                                                width={500}
                                                                height={200}
                                                                alt="item"
                                                            />
                                                            <h2>JOB ID {x.JobID}</h2>
                                                            <p>Email: {x?.Email}</p>
                                                            <p>Name: {x?.Name}</p>
                                                            <p>Portfolio Url: {x?.PortfolioLink}</p>
                                                            <p>Experience: {""}</p>
                                                            <textarea
                                                                placeholder="cover-letter"
                                                                name="coverletter"
                                                                value={x?.Message}
                                                                id=""
                                                                cols="20"
                                                                rows="5"
                                                            ></textarea>

                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    gap: "20px",
                                                                    flexWrap: "wrap",
                                                                }}
                                                            >
                                                                <button
                                                                    onClick={() => {
                                                                        localStorage.setItem(
                                                                            "apply-data",
                                                                            JSON.stringify(x)
                                                                        );
                                                                        Swal.fire({
                                                                            title:
                                                                                "Application approved successfully",
                                                                            showConfirmButton: true,
                                                                            confirmButtonText: "Ok",
                                                                        }).then((result) => {
                                                                            if (result.isConfirmed) {
                                                                                router.push("/");
                                                                            }
                                                                        });
                                                                    }}
                                                                    style={{
                                                                        backgroundColor: "green",
                                                                        color: "#fff",
                                                                        border: "none",
                                                                        borderRadius: "4px",
                                                                        padding: "10px 20px",
                                                                        fontSize: "16px",
                                                                        cursor: "pointer",
                                                                    }}
                                                                >
                                                                    Approve
                                                                </button>

                                                                <button
                                                                    onClick={() => {
                                                                        localStorage.setItem(
                                                                            "apply-data",
                                                                            JSON.stringify(x)
                                                                        );
                                                                        Swal.fire({
                                                                            title: "Rejected",
                                                                            showConfirmButton: true,
                                                                            confirmButtonText: "Ok",
                                                                        }).then((result) => {
                                                                            if (result.isConfirmed) {
                                                                                router.push("/");
                                                                            }
                                                                        });
                                                                    }}
                                                                    style={{
                                                                        backgroundColor: "red",
                                                                        color: "#fff",
                                                                        border: "none",
                                                                        borderRadius: "4px",
                                                                        padding: "10px 20px",
                                                                        fontSize: "16px",
                                                                        cursor: "pointer",
                                                                    }}
                                                                >
                                                                    Reject
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </section>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default withAuthenticator(Admin);
