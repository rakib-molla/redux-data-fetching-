import { useGetPostsByIdQuery, useGetPostsQuery, useSetPostMutation } from "./redux/feature/api/baseApi"


function App() {

  // const { data: posts,isLoading,isError,error,refetch } = useGetPostsQuery();
  // const { data: posts, isLoading, isError, error, refetch } = useGetPostsByIdQuery(1);

  const [setPost, {data: postData, isError, isLoading}] = useSetPostMutation();
  console.log(postData);

  if (isLoading) {
    return <p className="text-9xl ">Loading......</p>
  }

  if (isError) {
    return <p className="text-9xl bg-red-500">Something went wrong</p>
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    const form = e.target;
    const post = form.post.value;
    setPost({title:'this is post', data:post, id: '654654'})
  }
  return (
    <div>
      <h1 className="text-center text-5xl">Feed </h1>
      <div className="my-5">
        <form onSubmit={handleSubmit}>
          <input name="post" type="text" placeholder="Search" className="border"/>
          <input type="submit" className="bg-green-500 rounded-lg p-5" />
        </form>

      </div>
      <div className="flex flex-col gap-3">

        {/* {posts?.title} */}

        {/* {
              posts?.map((post)=>(
                 <>
                  <div className= 'bg-pink-400 text-white'>
                  <p key={post.title}>{post.title}</p>
                <li>{post.body}</li>
                  </div>
                </>
              ))
            } */}
      </div>

    </div>

  )
}

export default App
