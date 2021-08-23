import React from 'react'

interface CountdownProps{

}
const Countdown: StorefrontFunctionComponent<CountdownProps> = (/*{targetDate}*/) => {
  
  return (
    <div>
    <a href="https://api.whatsapp.com/send?phone=5511964335064&text=upmedal%20hiringcoders2021" target="new_blank" style={{color:'black',textDecoration: 'none'}}>Suporte</a>
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    /*targetDate: {
      title: 'Data final',
      description: 'Data final utilizada pelo contador',
      type: 'string',
      default: null,
    },*/
  },
}

export default Countdown
