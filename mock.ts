// mock.ts

// Mocking an interface for a User
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Mocking data for testing



const mockUsers: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', isActive: true },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', isActive: false },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', isActive: true },
];

// Function that returns active users
export function getActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}

// Function to find a user by email
export function findUserByEmail(users: User[], email: string): User | undefined {
  return users.find(user => user.email === email);
}

// Mock for asynchronous fetching of user data
export function fetchUsers(): Promise<User[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 1000); // Simulate network latency
  });
}

// Example test case (not a real testing framework)
(async function testMocks() {
  const users = await fetchUsers();
  console.log('Fetched Users:', users);

  const activeUsers = getActiveUsers(users);
  console.log('Active Users:', activeUsers);

  const user = findUserByEmail(users, 'alice@example.com');
  console.log('User Found by Email:', user);
})();
