import React, { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Redirect, Link } from 'react-router-dom'
import ApiAuth from '../api/ApiAuth'


export default function Signin(props) {

  const [values, setValues] = useState({
    username: undefined,
    password: undefined,
    redirect: false,
    error: ''
  });

  const handleOnChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      user_name: values.username || undefined,
      user_password: values.password || undefined
    }

    ApiAuth.signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, error: '', redirect: true })
      }
    })
  }

  const { from } = props.location.state || {
    from: {
      pathname: '/joblist'
    }
  }

  if (values.redirect) {
    console.log('redirect : ' || { from })
    return (<Redirect to={from} />)
  }

  return (
    <header className="bg-cover min-h-screen">
      <div class="w-full h-screen relative">
        <div class="absolute w-full h-full z-10 ">
          <div className="content px-8 py-2">
            <div className="body mt-14 mx-8">
              <div className="md:flex items-center justify-between">
                <div className="w-full md:w-1/2 mr-auto">
                  <Link to="/tourtravel/landing">
                    <span className="text-6xl font-bold text-white tracking-wide font-serif">
                      GitHub Jobs
                    </span>
                  </Link>
                  <h2 className="text-5xl font-bold text-white tracking-wide font-serif">
                    SimpleJobApp
                    <span className="pl-3 text-yellow-500">
                      Test
                    </span>
                  </h2>
                </div>

                <div className="w-full md:max-w-md mt-16 opacity-70">
                  <div className="card bg-white shadow-md rounded-lg px-4 py-4 mb-6 ">
                    {values.error &&
                      <p class="text-red text-lg italic">{values.error}</p>}
                    <form className="mt-8 space-y-6" action="#" method="POST">
                      <input type="hidden" name="remember" defaultValue="true" />
                      <div className="flex items-center justify-center">
                        <h2 className="text-2xl font-bold tracking-wide font-serif text-black">
                          Login Here
                        </h2>
                      </div>
                      <input
                        type="text"
                        autoComplete="name"
                        onChange={handleOnChange('user_name')}
                        required
                        className="rounded px-4 w-full py-1 bg-gray-200  border border-gray-400 mb-6 text-black placeholder-gray-500 focus:bg-white focus:outline-none"
                        placeholder="User Name"

                      />
                      <input
                        type="password"
                        autoComplete="current-password"
                        onChange={handleOnChange('user_password')}
                        required
                        className="rounded px-4 w-full py-1 bg-gray-200  border border-gray-400 mb-4 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none"
                        placeholder="Password"
                      />
                      <div className="flex items-center justify-between">
                        <button className="bg-gray-900 text-white px-2 py-1 rounded"
                          type="submit"
                          onClick={onSubmit}>
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute w-full h-64 bottom-0 bg-gradient-to-t from-black">
        </div>
        <video class="w-full h-64 lg:h-screen object-cover" loop autoPlay muted >
          <source class="h-screen object-contain"
            src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4"
            type="video/mp4" />
        </video>
      </div>
    </header>
  )
}