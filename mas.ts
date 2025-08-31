// mockServices.ts


// Mocking an interface for a Service
interface Service {
  id: number;
  name: string;
  duration: number; // in minutes
  isActive: boolean;
}

// Mock data for services
const mockServices: Service[] = [
  { id: 1, name: 'Consulting', duration: 60, isActive: true },
  { id: 2, name: 'Development', duration: 120, isActive: false },
  { id: 3, name: 'Design Review', duration: 45, isActive: true },
  { id: 4, name: 'QA Testing', duration: 90, isActive: true },
];

// Function to get active services
export function getActiveServices(services: Service[]): Service[] {
  return services.filter(service => service.isActive);
}

// Function to find a service by ID
export function findServiceById(services: Service[], id: number): Service | undefined {
  return services.find(service => service.id === id);
}

// Mock asynchronous fetching of service data
export function fetchServices(): Promise<Service[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockServices);
    }, 1200); // Simulate network latency
  });
}

// Example test case (not a real testing framework)
(async function testServiceMocks() {
  const services = await fetchServices();
  console.log('Fetched Services:', services);

  const activeServices = getActiveServices(services);
  console.log('Active Services:', activeServices);

  const service = findServiceById(services, 1);
  console.log('Service Found by ID:', service);
})();
