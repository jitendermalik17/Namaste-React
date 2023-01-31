import { useState } from "react"

const Section = ({title,description,isVisible,setIsVisible}) =>{
    
    return (
        <div className="border border-black p-2 m-2 ">
        <h3 className="font-bold text-xl">{title}</h3>
       {isVisible ? <div><button onClick={() => setIsVisible(true)}>Hide</button> 
       <p className="text-sm text-zinc-700">{description}</p></div> :
       <button onClick={() => setIsVisible(true)}>Show</button>}
        </div>

    )
}

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
    <div className="restaurant-list-container mt-5">
        <div className="flex-1">
            <h1 className="text-3xl p-2 pb-0 font-bold">Instamart</h1>
            <p className="mx-2  mb-5">This is dummy content for Instamart Page.</p>
            <Section title={"About Instamart"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets "}
            isVisible={visibleSection === "about"}
            setIsVisible={()=>setVisibleSection("about")}
            />

            <Section title={"Team section"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets "}
            isVisible={visibleSection === "team"}
            setIsVisible={()=>setVisibleSection("team")}
             />

            <Section title={"Careers"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets "}
            isVisible={visibleSection === "career"}
            setIsVisible={()=>setVisibleSection("career")}
            />

           
        </div>
    </div>
    </>
  )
}

export default Instamart