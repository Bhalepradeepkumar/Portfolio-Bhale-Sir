import React from 'react'

const Education = (props) => {
  return (
    <div className='flex flex-col h-[80%] items-center gap-5 justify-center'>
        <div >{props.icon}</div>
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </div>
  )
}

export default Education
