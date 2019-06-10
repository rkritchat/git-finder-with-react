import React, { Fragment, useEffect } from "react"
import Spinner from "../layout/Spinner"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Repos from "../repos/Repos"

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login) // param from path
    getUserRepos(match.params.login)
    //eslint-disable-next-line
  }, [])

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user

  if (loading) return <Spinner />
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Seatch
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {login}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Follower: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  )
}

User.propType = {
  loading: PropTypes.bool,
  user: PropTypes.object.isrequired,
  getUser: PropTypes.func.required,
  getUserRepos: PropTypes.func.required,
  repos: PropTypes.array.isRequired
}

export default User
