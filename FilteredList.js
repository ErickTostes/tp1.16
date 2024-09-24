import React, { useState } from 'react';

const itemsData = [
  { id: 1, name: 'Item A', category: 'Categoria 1' },
  { id: 2, name: 'Item B', category: 'Categoria 2' },
  { id: 3, name: 'Item C', category: 'Categoria 1' },
  { id: 4, name: 'Item D', category: 'Categoria 3' },
  { id: 5, name: 'Item E', category: 'Categoria 2' },
];

function FilteredList() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory === 'Todas' 
    ? itemsData 
    : itemsData.filter(item => item.category === selectedCategory);

  return (
    <div>
      <h2>Lista de Itens</h2>
      <label htmlFor="category-filter">Filtrar por categoria:</label>
      <select id="category-filter" onChange={handleCategoryChange}>
        <option value="Todas">Todas</option>
        <option value="Categoria 1">Categoria 1</option>
        <option value="Categoria 2">Categoria 2</option>
        <option value="Categoria 3">Categoria 3</option>
      </select>
      <p>
        Total de itens filtrados: {filteredItems.length}
      </p>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
