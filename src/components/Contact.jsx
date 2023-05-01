import React, { useState, useEffect } from 'react'
import TypingEffect from 'react-typing-effect'

export default function Contact(props) {
  const [displayCode, setDisplayCode] = useState('')
  const [displayContact, setDisplayContact] = useState(true)
  const [displayContactSuccess, setDisplayContactSuccess] = useState(false)
  const [Submit, setSubmit] = useState(false)
  const [executeBtn, setExecuteBtn] = useState(false)

  const contact = `
  <h1 class="contact-form__title">Contact</h1>
  <div class="contact-form__code">
    <div class="contact-form__code__line contact-form__code__block__1">
      fetch(ShriramKhandbahale, {

        <div class="contact-form__code__line contact-form__code__block__2 ">
          method: 'post',
        </div>

        <div class="contact-form__code__line contact-form__code__block__2 ">

          body: JSON.stringify({

          <div class="contact-form__code__line contact-form__code__block__3 ">
            <div>
              <label for="name">name</label>: "<input required type="text" id="name" name="entry.600811330" />",
            </div>

            <div>
              <label for="email">email</label>: "<input required type="email"  id="email" name="entry.1595346358" />",
            </div>

            <div>
              <label for="subject">subject</label>: "<input required id="subject" name="entry.143159141" />",
            </div>

            <div class="contact-form__code__message-field" id="message-box">
              <label for="message">message</label>: "<textarea  required id="message" name="entry.2061966040" ></textarea>"
            </div>

          </div>
            <div class="contact-form__code__line">})</div>
          </div>
        
        <div class="contact-form__code__line">});</div>
    </div>
  </div>
  `

  
  function submitForm(e) {
    setTimeout(() => {
      setDisplayContact(false)
      setDisplayContactSuccess(true)
    }, 2000);
    setSubmit(true)
  }

  // typing animation
  useEffect(() => {
    let i = 0
    const intervalId = setInterval(() => {
      setDisplayCode(contact.slice(0, i))
      i++
      if (i > contact.length) {
        setExecuteBtn(true)
        clearInterval(intervalId)
      }
    }, 10)
    return () => clearInterval(intervalId)
  }, [contact])

  return (
    <>
      <iframe name='dummyframe' id='dummyframe' style={{ display: 'none' }} />

      <div className='contact-form' style={displayContact ? { display: 'flex' } : { display: 'none' }}>

        <form onSubmit={submitForm} action='https://docs.google.com/forms/d/e/1FAIpQLSdzUCPJbNBfhGpbdSIyXUFsfRnXW1sMndRpVG3_tJ-g_dXS8w/formResponse' target='dummyframe'>

          <div dangerouslySetInnerHTML={{ __html: displayCode }} />

          <div className="btn-container" style={executeBtn ? { display: 'block' } : { display: 'none' }}>
            <button style={!Submit ? { display: 'block' } : { display: 'none' }} type="submit">Execute</button>

            <div style={Submit ? { display: 'block' } : { display: 'none' }} id='progress-bar-container' >
              <div id='progress-bar'></div>
            </div>

          </div>
        </form>
      </div >


      <div className='contact-form' style={displayContactSuccess ? { display: 'block' } : { display: 'none' }}>
        <div>
          <h1 class='contact-form__title'>Contact</h1>
        </div>
        <div className="submit-message">

          {displayContactSuccess ? (
            <div>
              <TypingEffect style={{ color: 'white' }} text={['{ success: true }']} eraseDelay={999999999} /></div>)
            : ('')
          }

        </div>
      </div>
    </>
  )
}
