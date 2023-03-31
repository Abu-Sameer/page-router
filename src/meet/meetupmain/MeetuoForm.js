import React from 'react';
import { useRef } from 'react';
import Contained from '../contain/Contained';
import classic from './MeetupForm.module.css';

export default function MeetuoForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enterTitleRef = titleRef.current.value;
    const enterImageRef = imageRef.current.value;
    const enterAddressRef = addressRef.current.value;
    const enterDescriptionRef = descriptionRef.current.value;

    const formData = {
      title: enterTitleRef,
      image: enterImageRef,
      address: enterAddressRef,
      description: enterDescriptionRef,
    };

    props.meetupFire(formData);
  }

  return (
    <Contained>
      <form className={classic.form} onSubmit={submitHandler}>
        <div className={classic.input}>
          <label htmlFor="title">
            Meetup Title
            <input
              id="title"
              required
              type="text"
              ref={titleRef}
              placeholder="Enter the meetup title"
            />
          </label>
        </div>
        <div className={classic.input}>
          <label htmlFor="image">
            Meetup Image
            <input
              id="image"
              required
              type="url"
              ref={imageRef}
              placeholder="https://yourmeetupimageurl"
            />
          </label>
        </div>
        <div className={classic.input}>
          <label htmlFor="address">
            Address
            <input
              id="address"
              required
              type="text"
              ref={addressRef}
              placeholder="Enter the meetup address"
            />
          </label>
        </div>
        <div className={classic.input}>
          <label htmlFor="description">
            Description
            <textarea required id="description" rows="6" ref={descriptionRef} />
          </label>
        </div>
        <div className={classic.btn}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Contained>
  );
}
