// mockData.js - Banco de dados simulado

export const mockUsers = []

export const storeLocations = [
  {
    id: 1,
    name: 'Emerald Harvest - Paulista',
    address: 'Av. Paulista, 1000',
    city: 'São Paulo, SP',
    zipCode: '01310-100',
    phone: '(11) 3120-1234',
    hours: '08:00 - 22:00',
    featured: true,
    image: '🏪'
  },
  {
    id: 2,
    name: 'Emerald Harvest - Vila Mariana',
    address: 'Rua Vergueiro, 2500',
    city: 'São Paulo, SP',
    zipCode: '01504-001',
    phone: '(11) 3120-5678',
    hours: '08:00 - 22:00',
    image: '🏪'
  },
  {
    id: 3,
    name: 'Emerald Harvest - Pinheiros',
    address: 'Rua Bandeira, 702',
    city: 'São Paulo, SP',
    zipCode: '05429-000',
    phone: '(11) 3120-9012',
    hours: '08:00 - 23:00',
    image: '🏪'
  },
  {
    id: 4,
    name: 'Emerald Harvest - Consolação',
    address: 'Av. Consolação, 1515',
    city: 'São Paulo, SP',
    zipCode: '01302-001',
    phone: '(11) 3120-3456',
    hours: '07:00 - 22:00',
    image: '🏪'
  },
  {
    id: 5,
    name: 'Emerald Harvest - Jardins',
    address: 'Rua Oscar Freire, 500',
    city: 'São Paulo, SP',
    zipCode: '01426-100',
    phone: '(11) 3120-7890',
    hours: '08:00 - 21:00',
    image: '🏪'
  }
]

// Funções para gerenciar dados
export const loginUser = (email, password) => {
  const user = mockUsers.find(u => u.email === email && u.password === password)
  if (user) {
    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword
  }
  return null
}

export const registerUser = (userData) => {
  const { fullName, email, phone, password } = userData

  // Verificar se email já existe
  if (mockUsers.find(u => u.email === email)) {
    return { error: 'Email já registrado' }
  }

  const newUser = {
    id: mockUsers.length + 1,
    fullName,
    email,
    password,
    phone,
    nivel: 'MEMBRO INICIANTE',
    colheita: 'Colheita Inicial',
    pontos: 0
  }

  mockUsers.push(newUser)

  // Salvar em localStorage para persistência
  localStorage.setItem('mockUsers', JSON.stringify(mockUsers))

  const { password: _, ...userWithoutPassword } = newUser
  return userWithoutPassword
}

export const getStoreLocations = () => {
  return storeLocations
}

export const getStoreById = (id) => {
  return storeLocations.find(store => store.id === id)
}

export const getFeaturedStore = () => {
  return storeLocations.find(store => store.featured)
}

// Inicializar dados do localStorage se existirem
export const initializeMockData = () => {
  const savedUsers = localStorage.getItem('mockUsers')
  if (savedUsers) {
    try {
      const parsed = JSON.parse(savedUsers)
      mockUsers.length = 0
      mockUsers.push(...parsed)
    } catch (e) {
      console.log('Erro ao carregar dados salvos')
    }
  }
}
