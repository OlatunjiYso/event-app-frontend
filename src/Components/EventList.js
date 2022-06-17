import React, { useState, useEffect } from "react";
import Event from "./Event";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await fetch("http://localhost:3030/api/v1/events");
        if (!response.ok) {
          setErrors('unable to fetch data');
        }
        const jsonEvents = await response.json();
        setEvents(jsonEvents);
      } catch (err) {
        setErrors(err.message);
      } finally {
        setLoading(false);
      }
    };
    getEvents();
  }, []);

  return (
    <div className="">
      <h4>All Events for You!</h4>
      <div className="">
        {events.map((event, index) => {
          const { title, address, isVirtual } = event;
          return (
            <Event
              key={event.id}
              title={title}
              isVirtual={isVirtual}
              address={address}
            />
          );
        })}
      </div>
    </div>
  );
};
