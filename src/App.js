import React from 'react';
import './style.css';
import '@mail3/mail3-me';

export default function App() {
  return (
    <div class="container">
      <h3>Default</h3>
      {/* <mail3-me filter="only mails from this address will show notification" /> */}
      <mail3-me to="oxyful.eth@mail3.me" ></mail3-me>
      <h3>Attribute: lite</h3>
      <div class="list">
        <mail3-me to="oxyful.eth@mail3.me"  lite></mail3-me>
      </div>
      <h3>Attribute: variant</h3>
      <div class="list">
        <mail3-me to="oxyful.eth@mail3.me"  variant="solid"></mail3-me>
        <mail3-me to="oxyful.eth@mail3.me"  variant="outline"></mail3-me>
        <mail3-me to="oxyful.eth@mail3.me"  variant="ghost"></mail3-me>
      </div>
      <h3>Attribute: icon_type</h3>
      <div class="list">
        <mail3-me to="oxyful.eth@mail3.me"  icon_type="solid"></mail3-me>
        <mail3-me to="oxyful.eth@mail3.me"  icon_type="white"></mail3-me>
        <mail3-me to="oxyful.eth@mail3.me"  icon_type="light"></mail3-me>
        <mail3-me to="oxyful.eth@mail3.me"  icon_type="black" variant="outline"></mail3-me>
      </div>
      <h3>Custom Style</h3>
      <div class="list">
        <mail3-me
          to="oxyful.eth@mail3.me"
          icon_type="white"
          icon_style="width: 24px; height: 24px; margin-right: 8px"
          css="width: 250px; font-size: 16px; border-radius: 24px; background: #4E52F5;"
        ></mail3-me>
      </div>
    </div>
  );
}
