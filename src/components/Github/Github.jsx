import React from 'react'
import { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {

  const data = useLoaderData();
  var date = new Date(data.created_at);
  const formattedDate =date.toLocaleDateString();
  console.log("DATE:",date)
  // const [data, setData] = useState([]);
  // const [formattedDate, setFormattedDate] = useState('');
  // useEffect(() => {  
  //   fetch('https://api.github.com/users/omerkarakuzu')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //     var isoString = data.created_at;
  //     var date = new Date(isoString);
  //     setFormattedDate(date.toLocaleDateString());
  //   })
  // }, [])
  


  return (
    <>
<section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={data.avatar_url} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Follow me!</span>
				<h3 className="text-3xl font-bold">Username: {data.login}</h3>
				<p className="my-6 dark:text-gray-400">Joined DATE: {formattedDate}</p>
				<button type="button" className="self-start">Follower: {data.following}</button>
			</div>
		</div>

	</div>
</section>
    
    </>
  )
}

export default Github

export const githubInfoLoader = async () => 
{
  const response =await fetch('https://api.github.com/users/omerkarakuzu')

  return response.json();
}