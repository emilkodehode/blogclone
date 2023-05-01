import { fetchFunc } from "./utility/fetchfunc"


function App() {
  return (
    <>
    <header><h1>one day i'll be a nav bar</h1></header>
    <Articles adress="https://api.realworld.io/api/articles?limit=5&offset=0"/>
    </>
  )
}

export default App


interface restAPI{
  adress: string
}
function Articles(url:restAPI){
  
  const {loading, data} = fetchFunc(url.adress)

  return(
    <>
    {loading ? <h1>loading....</h1> : data.articles.map((item: article)=> <Posts slug={item.slug} title={item.title} description={item.description}/>)}
    </>
  )
}


interface article{
    slug: String,
    title: String,
    description: string,
    body: string,
    tagList: [],
    createdAt: string,
    updatedAt: string,
    favorited: boolean,
    favoritesCount: number,
    author: {
      username: string,
      bio: string,
      image: string,
      following: boolean
    }
}
function Posts(prop: article){
  console.log(prop.slug)
  console.log(prop)
  return(
    <>
    <p>{prop.slug}</p>
    <p>{prop.description}</p>
    <p>{prop.title}</p>
    </>
  )
}