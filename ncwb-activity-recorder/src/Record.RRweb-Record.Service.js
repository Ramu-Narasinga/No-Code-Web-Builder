import { record } from 'rrweb';

let events = [];

export function startRecordingEvents() {
  
  record({
    emit(event) {
      // push event into the events array
      events.push(event);
      // setEvents(events);
    },
  });
}

export function getEvents() {
  return events;
}

export function flushEvents() {
  events = [];
}