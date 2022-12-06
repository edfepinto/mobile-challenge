import { TicketEntityBody } from "~/domain/entities/ticket.entity";
import { BaseRepository } from "~/domain/repositories/base-repository.repository";

// TO-DO: Extract this in memory repository to a superclass to follow DRY
class TicketsInMemoryRepository implements BaseRepository {
  storage: TicketEntityBody[];

  private static instance: TicketsInMemoryRepository;

  constructor() {
    this.storage = [];
  }

  // REFACTOR ME: This shouldn't be the entity body, instead, create a DTO based on Ticket entity
  save(ticketDTO: TicketEntityBody) {
    this.storage.push(ticketDTO);
  }

  listAll() {
    return this.storage;
  }

  static getSingletonInstance() {
    if (!TicketsInMemoryRepository.instance) {
      TicketsInMemoryRepository.instance = new TicketsInMemoryRepository();
    }

    return TicketsInMemoryRepository.instance;
  }
}

// REFACTOR ME: change this default export
export default TicketsInMemoryRepository.getSingletonInstance();
