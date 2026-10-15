const products = [
  { id: 1, name: 'Snake Plant', category: 'Air Purifying', price: 18, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b2b?auto=format&fit=crop&w=700&q=80', description: 'A hardy, low-maintenance indoor plant.' },
  { id: 2, name: 'Peace Lily', category: 'Air Purifying', price: 22, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80', description: 'Elegant green leaves and beautiful blooms.' },
  { id: 3, name: 'Spider Plant', category: 'Air Purifying', price: 14, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80', description: 'A cheerful plant for shelves and desks.' },
  { id: 4, name: 'Golden Pothos', category: 'Air Purifying', price: 16, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80', description: 'Trailing vines that brighten any corner.' },
  { id: 5, name: 'Rubber Plant', category: 'Air Purifying', price: 25, image: 'https://images.unsplash.com/photo-1617391762013-2f4c7a2a7e2c?auto=format&fit=crop&w=700&q=80', description: 'Glossy leaves with a bold, modern look.' },
  { id: 6, name: 'Areca Palm', category: 'Air Purifying', price: 28, image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c2a?auto=format&fit=crop&w=700&q=80', description: 'A tropical touch for living spaces.' },
  { id: 7, name: 'Aloe Vera', category: 'Succulents', price: 12, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'A sun-loving succulent with sculptural leaves.' },
  { id: 8, name: 'Echeveria', category: 'Succulents', price: 10, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80', description: 'A compact rosette succulent.' },
  { id: 9, name: 'Jade Plant', category: 'Succulents', price: 15, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80', description: 'A classic succulent with rounded leaves.' },
  { id: 10, name: 'Haworthia', category: 'Succulents', price: 11, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=80', description: 'Small, striking leaves for a sunny sill.' },
  { id: 11, name: 'String of Pearls', category: 'Succulents', price: 19, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80', description: 'Distinctive trailing bead-like foliage.' },
  { id: 12, name: 'Zebra Haworthia', category: 'Succulents', price: 13, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80', description: 'A small statement plant with striped leaves.' },
  { id: 13, name: 'Monstera Deliciosa', category: 'Statement Plants', price: 32, image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=700&q=80', description: 'Iconic split leaves for a tropical feel.' },
  { id: 14, name: 'Fiddle Leaf Fig', category: 'Statement Plants', price: 38, image: 'https://images.unsplash.com/photo-1616690249334-3b6d6a4b7a2a?auto=format&fit=crop&w=700&q=80', description: 'Large leaves that make a bold statement.' },
  { id: 15, name: 'Bird of Paradise', category: 'Statement Plants', price: 45, image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c2a?auto=format&fit=crop&w=700&q=80', description: 'A dramatic plant for bright rooms.' },
  { id: 16, name: 'Calathea', category: 'Statement Plants', price: 24, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80', description: 'Decorative patterned leaves.' },
  { id: 17, name: 'Chinese Evergreen', category: 'Statement Plants', price: 21, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'Colorful foliage and easy care.' },
  { id: 18, name: 'Parlor Palm', category: 'Statement Plants', price: 20, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80', description: 'A graceful palm for smaller spaces.' },
];

export default products;
