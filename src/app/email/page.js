'use client';
import React from 'react';

export default function Email() {
  
  return (
    <div className= "h-60 flex items-center justify-center">
    <div id="mc_embed_signup" style={{ background: '#fff', fontFamily: 'Helvetica,Arial,sans-serif', fontSize: '14px', width: '600px' }}>
    <form
      action="https://app.us20.list-manage.com/subscribe/post?u=7f8eb8ea8bee7abfd177c6822&amp;id=67bd06a0a0&amp;f_id=00edd7edf0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >      
        <div id="mc_embed_signup_scroll">
          <h2 className= "text-black">Coloque seu email para receber o ebook</h2>
          <div className="indicates-required">
            <span className="text-black asterisk">*</span> indica obrigatório
        </div>      
        <div className="mc-field-group">
          <label className= "text-black" htmlFor="mce-EMAIL">Endereço de e-mail <span className="asterisk">*</span></label>
          <input type="email" name="EMAIL" className=" bg-gray-500 required email" id="mce-EMAIL" required />
        </div>

        <div className="mc-field-group input-group">
          <strong className = "text-black">formato do Email, url ou digitado. </strong>
          <ul>
            <li>
              <input type="radio" name="EMAILTYPE" id="mce-EMAILTYPE0" value="html" />
              <label className= "text-black" htmlFor="mce-EMAILTYPE0">url</label>
            </li>
            <li>
              <input type="radio" name="EMAILTYPE" id="mce-EMAILTYPE1" value="text" />
              <label className = "text-black" htmlFor="mce-EMAILTYPE1">text</label>
            </li>
          </ul>
        </div>

        <div id="mce-responses" className="clear foot">
          <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
        </div>

        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_7f8eb8ea8bee7abfd177c6822_67bd06a0a0" tabIndex="-1" />
        </div>

        <div className="optionalParent">
          <div className="clear foot">
            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
            <p style={{ margin: '0 auto' }}>
              <a href="http://eepurl.com/jd7bek" title="Mailchimp - marketing por e-mail fácil e divertido">
                <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                  <img
                    className="refferal_badge"
                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                    alt="Intuit Mailchimp"
                    style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0', justifyContent: 'center', alignItems: 'center' }}
                  />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
  );
}

