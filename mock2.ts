// anotherMock.ts

// Mocking an interface for a Product
interface Product {
  id: number;
  name: string;
  price: number;
  isInStock: boolean;
}


// Mocking data for product testing
const mockProducts: Product[] = [
  { id: 1, name: 'Laptop', price: 1200, isInStock: true },
  { id: 2, name: 'Smartphone', price: 800, isInStock: false },
  { id: 3, name: 'Headphones', price: 150, isInStock: true },
  { id: 4, name: 'Monitor', price: 300, isInStock: false },
];

// Function that returns available products
export function getAvailableProducts(products: Product[]): Product[] {
  return products.filter(product => product.isInStock);
}

// Function to find a product by name
export function findProductByName(products: Product[], name: string): Product | undefined {
  return products.find(product => product.name.toLowerCase() === name.toLowerCase());
}

// Mock for asynchronous fetching of product data
export function fetchProducts(): Promise<Product[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 1500); // Simulate network latency
  });
}

// Example test case (not a real testing framework)
(async function testProductMocks() {
  const products = await fetchProducts();
  console.log('Fetched Products:', products);

  const availableProducts = getAvailableProducts(products);
  console.log('Available Products:', availableProducts);

  const product = findProductByName(products, 'Laptop');
  console.log('Product Found by Name:', product);
})();

