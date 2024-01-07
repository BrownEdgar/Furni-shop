import React from 'react'
import './Cta.scss'

export default function Cta() {
  return (
    <div className='main'>
        <div className='text'>
            <div className='textbox'>
                <h2 className='getdiscount'>Get more discount <br />Off your order</h2>
                <p className='join'>Join our mailing list</p>
            </div>
            <form action="" className='form'>
                <input type="text" placeholder='Your email address'/>
                <button>Shop now</button>
            </form>
        </div>

    </div>
  )
}
