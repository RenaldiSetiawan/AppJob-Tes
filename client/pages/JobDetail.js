import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser';
import ApiJobs from '../api/ApiJobs'
import { useHistory } from 'react-router-dom'
import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';

export default function JobDetail({ match }) {
    let history = useHistory();
    const [job, setJob] = useState()

    useEffect(() => {
        ApiJobs.findById(match.params.id).then(data => {
            setJob(data);
        })
    }, [match.params.id])

    return (
        <>
            <NavBar />
            <PageHeader setModal={() => history.push('/joblist')} actionType={'Back'} />
            {job &&
                <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                    <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                        <section aria-labelledby="applicant-information-title">
                            <div className="bg-white shadow sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <div className="mt-1 max-w-2xl text-lg font-medium text-gray-400">
                                        {job.type}
                                    </div>
                                    <p id="applicant-information-title"
                                        className="leading-6 text-xl font-bold text-gray-800">
                                        {job.title}
                                    </p>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                        <div className="sm:col-span-2">
                                            <dt className="leading-6 text-xl font-bold text-black">{job.company}</dt>
                                            <dd className="mt-1 text-base text-justify text-gray-900">
                                                {parse(job.description)}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
                        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6 border-8 border-gray-200">
                            <div className="px-4 py-5 sm:px-6 justify-stretch">
                                <h2 id="notes-title" className="text-xl font-bold text-black">
                                    {job.company}
                                </h2>
                            </div>

                            {/* Activity Feed */}
                            <div className="border-t border-gray-200  flow-root">
                                <ul className="-mb-8">
                                    <img
                                        className="h-8 w-auto"
                                        src={job.company_logo}
                                        alt="Workflow"
                                    />
                                </ul>
                            </div>
                            <div className="mt-6 flex flex-col justify-stretch">
                                <h2 id="notes-title" className="text-lg font-medium text-blue-600 underline">
                                    {job.company_url}
                                </h2>
                            </div>
                        </div>

                        <div className="bg-green-50 border-8 border-green-100 px-4 py-5 mt-5 shadow sm:rounded-lg sm:px-6">
                            <div className="px-4 py-5 sm:px-6 justify-stretch">
                                <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                                    How to apply
                                </h2>
                            </div>

                            {/* Activity Feed */}
                            <div className="border-t border-gray-200 flow-root">
                                {parse(job.how_to_apply)}
                            </div>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}
