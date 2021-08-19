import React, { useState, useEffect } from 'react';
import ApiJobs from '../api/ApiJobs'
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';

export default function Jobs() {
    
    const [jobs, setJobs] = useState([]);
    const [values, setValues] = useState({
        job_desc: undefined,
        location: undefined,
        fulltime: false,
        filter: false
    });

    useEffect(() => {
        ApiJobs.list().then(data => {
            setJobs(data);
        })
    }, []);

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const filterParams = {
            desc: values.job_desc || null,
            location: values.location || null,
            fullTime: values.fulltime === 'on' ? true : false
        }
        ApiJobs.findByParams(filterParams).then(data => {
            setJobs(data);
        });
    }

    return (
        <>
            <NavBar />
            <div className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between px-6 bg-white shadow sm:items-baseline w-full">
                <div className="w-full lg:max-w-xs">
                    <label className="block text-3x1 font-medium text-black">
                        Job Description
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="job_desc"
                            id="job_desc"
                            autoComplete="job_desc"
                            placeholder="&#128203; Filter by title, benefit, companies, expertise"
                            className="border-opacity-50 border-4 block w-full sm:text-sm border-gray-400 rounded-sm focus:ring-gray-400 focus:border-gray-400"
                            onChange={handleOnChange('job_desc')}
                        />
                    </div>
                </div>

                <div className="w-full lg:max-w-xs">
                    <label className="block text-3x1 font-medium text-black">
                        Location
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder=" &#127758; Filter by city, state, zip code or country"
                            autoComplete="family-name"
                            className="border-opacity-50 border-4 block w-full sm:text-sm border-gray-400 rounded-sm focus:ring-gray-400 focus:border-gray-400"
                            onChange={handleOnChange('location')}
                        />
                    </div>
                </div>

                <div className="relative flex items-start">
                    <div className="mt-1">
                        <input
                            id="fulltime"
                            name="fulltime"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded-sm mt-16"
                            onChange={handleOnChange('fulltime')}
                        />
                    </div>
                    <div className="flex-row-reverse ml-3 text-sm py-16">
                        <label className="block text-3x1 font-medium text-black">
                            Full Time Only
                        </label>
                    </div>
                </div>

                <div className="relative flex items-start">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-gray-400 py-2 px-4 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-white"
                            onClick={onSubmit}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h1 className="leading-6 font-sans text-3xl text-gray-900">Job List</h1>
                </div>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {/* Map Job */}
                                    {jobs && jobs.map((job) => (
                                        <tr key={job.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Link to={`/jobdetail/${job.id}`}>
                                                    <h1 className="text-xl font-bold text-blue-600">
                                                        {job.title}
                                                    </h1>
                                                </Link>
                                                <h2 className="text-lg font-medium text-gray-400">{job.company} -
                                                    <span className="text-lg font-bold text-green-600 ml-1">
                                                        {job.type}
                                                    </span>
                                                </h2>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="text-lg font-normal text-gray-900">{job.location}</div>
                                                <div className="text-sm font-normal text-gray-500">{job.created_at}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
