"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const Location = () => {
  const params = useParams()
  console.log(params.location)
  return (
    <div>
        <div className="w-screen mb-10 h-[80vh] flex justify-center">
        <div style={{ width: '1200px', position: 'relative' }}>
  <iframe
    width="1200"
    height="600"
    src="https://maps.google.com/maps?width=1200&amp;height=600&amp;hl=en&amp;q=delhi+(Title)&amp;ie=UTF8&amp;t=p&amp;z=9&amp;iwloc=B&amp;output=embed"
    
  ></iframe>
  <div
    style={{
      position: 'absolute',
      width: '80%',
      bottom: '10px',
      left: '0',
      right: '0',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: '#000',
      textAlign: 'center',
    }}
  >
    <small style={{ lineHeight: '1.8', fontSize: '2px', background: '#fff' }}>
      Powered by <a href="http://www.googlemapsgenerator.com/es/">gmapgen es</a> &{' '}
      <a href="https://uuc.nu/">lån utan uc med betalningsanmärkningar</a>
    </small>
  </div>
  <style>{`#gmap_canvas img{max-width:none!important;background:none!important}`}</style>
</div>
<br />

                </div>

    </div>
  )
}

export default Location