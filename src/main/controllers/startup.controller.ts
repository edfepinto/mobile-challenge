import { mockDataService } from "~/infra/data-service/mock.data-service";
import eventsInMemoryRepository from "../repositories/events/events-in-memory.repository"

export const startupController = {
  populateEventsWithMock() {
    console.log("injecting mock data")
    const mock = mockDataService.getEvents();
    mock.forEach(data => eventsInMemoryRepository.save(data));
  } 
}
