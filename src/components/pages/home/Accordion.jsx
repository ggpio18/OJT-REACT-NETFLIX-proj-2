import React from 'react'
import { GoPlus } from "react-icons/go";

const Accordion = ({item, key}) => {

    const body = item.answer;

    const [active, setActive] = React.useState(false)

    const handleActive = () => setActive(!active)

  

  return (
<div className="accordion p-4 bg-[#232323] hover:bg-[#414141] border-b border-black border-[10px]" key={key}>

    <div className='flex justify-between items-center py-5 border-b cursor-pointer border-stone-600' onClick={handleActive}>
        <h4 className='text-3xl font-bold question'>{item.question}</h4>
        <GoPlus className={`text-5xl transition-all ${active ? "rotate-45" : "rotate-0"}`} />
    </div>

    <div className={`${active ? "max-h-[500px]" : "max-h-[0]"} overflow-hidden transition-all h-full answer`}>
        <div className='mt-5' dangerouslySetInnerHTML={{ __html: body}}>
             
        </div>
    </div>

</div>
  )
}

export default Accordion
