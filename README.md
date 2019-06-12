# Stigma.ink - tattoo booking platform

[Trello](https://trello.com/b/6YYAo6fh/stigma-ink)

Deployed on [Stigma.ink](http://www.stigma.ink)

## Checklists

### Before Demo

- [ ] Client Registration
- [ ] Artist Registration
- [x] Client Login
- [x] Artist Login
- [ ] "Application" Flow
- [ ] "Invitation" Flow
- [ ] Emails at milestones
- [x] Adding reference images
- [ ] Appointment booking
- [ ] Flash Events

### Debatable

- [ ] Portfolio uploading
- [ ] Profile editing
- [ ] See upcoming events + appointments, from client view

### Stretch

- [ ] "Inquiry" Flow
- [ ] Google Calendar integration

## Stigma Interaction Pipelines

An "Interaction" is a record of continuous communication between a client and an artist for one (1) job.

There are three different flows for interactions to happen.

### "Application" Flow

1. Artist sets books status to "open"
2. Client fills out form to create an Application
   1. Application is made with details, reference images, etc.
   2. Application is initialized in "locked" mode for the client, meaning that the client is unable to add chat messages until the artist replies.
3. Artist is immediately able to reply in a chat.
   1. If the artist replies with a chat message, the client can now freely engage in chatting back/forth with the artist until the Interaction is closed.
4. Artist is able to accept the Application, which turns the Application into a Booking.
5. Now that there is a Booking, client and artist can exchange reference images, details, chat, etc.
6. When it is time, the artist and client can decide on appointment dates.
   1. There may be many appointment dates, for different purposes. Since every artist has a different flow, there will just be simple Appointments for now.
      1. Appointments will have their own flow for suggesting/confirming/declining/rescheduling, etc.
7. When an Appointment happens, the Artist can check the event off as "occured"
8. When the events have all occured, the artist marks the interaction as complete.
   1. Complete interactions are not "closed" in effect. Artist and clients can still have follow-ups, TBD.

### "Invitation" Flow

Important Assumption: Artist's books status is "closed"

1. Artist gives a client a secret invite link to application form via FB messenger, IG direct message, etc.
   1. Example: www.stigma.ink/fearbear?invite=98uafs7das8dyfas78dfasdf7 <--- random key (like a promo code), unlocking the "Apply" button + modal, and permitting the backend to create the Application
   2. Possibly auto-open the application modal
2. Client follows link to find application form
3. Rest of flow is identical to "Application Flow", continuing from point (2).

### "Inquiry" Flow

Note! This is much less important than the other two flows, and should be the lowest priority. Ideally, this does not even need to be ready in time for presenting to potential clients.

1. Client submits a "question" to the Artist through the form on the artist's page. This creates an Inquiry interaction.
   1. Similar to the Application Flow, the interaction is then locked for the client until the artist replies.
2. Artist is immediately able to reply in a chat.
   1. If the artist replies with a chat message, the client can now freely engage in chatting back/forth with the artist until the Interaction is closed.
3. Artist may permit client to send in an application, by making the "Send Application" button + form visible on the interaction page.
4. Client fills out application form, like in point (2) of "Application Flow", which transforms Inquiry into Application.
5. Rest of flow is identical to "Application Flow", continuing from point (3).