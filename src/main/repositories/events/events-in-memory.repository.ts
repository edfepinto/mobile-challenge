import { EventEntityBody } from "~/domain/entities/event.entity"
import { BaseRepository } from "~/domain/repositories/base-repository.repository";
import { randomIntFromInterval } from "~/shared/utils/random/random-int-from-interval";

// TO-DO: Extract this in memory repository to a superclass to follow DRY
class EventsInMemoryRepository implements BaseRepository {
  id: number;
  storage: EventEntityBody[];

  private static instance: EventsInMemoryRepository;

  constructor() {
    this.id = randomIntFromInterval(0, 100)
    this.storage = [];
  }

  // REFACTOR ME: This shouldn't be the entity body, instead, create a DTO based on Ticket entity
  save(ticketDTO: EventEntityBody) {
    this.storage.push(ticketDTO);
  }

  listAll() {
    return this.storage;
  }

  // REFACTOR ME: This logic should be moved to a use case 
  buyByTitle(title: string) {
    this.storage = this.storage.map(event => {
      if (event.title === title) {
        return {
          ...event,
          ticketsLimit: event.ticketsLimit - 1
        }
      }
      return event;
    })
  }

  static getSingletonInstance() {
    if (!EventsInMemoryRepository.instance) {
      EventsInMemoryRepository.instance = new EventsInMemoryRepository();
    }

    return EventsInMemoryRepository.instance;
  }
}

// REFACTOR ME: change this default export
export default EventsInMemoryRepository.getSingletonInstance();
