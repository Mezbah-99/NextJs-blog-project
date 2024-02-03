
export async function generateMetadata(){
  const res=await fetch(process.env.BASE_URL+"api/SiteMeta/projects");
  const data=await res.json();
  const {page, description, keywords, image} = data[0]
  return {
    title: page,
    description: description,
    keywords: keywords,
    openGraph: {
      images: image
    },
  };
}
const Layout = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Layout