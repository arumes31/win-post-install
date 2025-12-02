import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { softwareCatalog } from '../data/software-catalog';
import { getCategoryItemIds } from '../utils/catalogHelpers';
import { STORAGE_KEYS } from '../constants';

const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  // State
  const [selectedSoftware, setSelectedSoftware] = useState([]);
  const [selectedConfigs, setSelectedConfigs] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.selections);
      if (saved) {
        const data = JSON.parse(saved);
        setSelectedSoftware(data.software || []);
        setSelectedConfigs(data.configs || []);
      }
    } catch (error) {
      console.error('Error loading selections from localStorage:', error);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEYS.selections,
        JSON.stringify({
          software: selectedSoftware,
          configs: selectedConfigs,
        })
      );
    } catch (error) {
      console.error('Error saving selections to localStorage:', error);
    }
  }, [selectedSoftware, selectedConfigs]);

  // Toggle single software
  const toggleSoftware = useCallback((id) => {
    setSelectedSoftware((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }, []);

  // Toggle single configuration
  const toggleConfig = useCallback((id) => {
    setSelectedConfigs((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  }, []);

  // Select all software in a category
  const selectAllInCategory = useCallback((categoryId) => {
    const categoryItems = getCategoryItemIds(softwareCatalog, categoryId);
    setSelectedSoftware((prev) => [...new Set([...prev, ...categoryItems])]);
  }, []);

  // Deselect all software in a category
  const deselectAllInCategory = useCallback((categoryId) => {
    const categoryItems = getCategoryItemIds(softwareCatalog, categoryId);
    setSelectedSoftware((prev) =>
      prev.filter((id) => !categoryItems.includes(id))
    );
  }, []);

  // Check if all items in category are selected
  const isAllCategorySelected = useCallback((categoryId) => {
    const categoryItems = getCategoryItemIds(softwareCatalog, categoryId);
    return categoryItems.every((id) => selectedSoftware.includes(id));
  }, [selectedSoftware]);

  // Clear all selections
  const clearAll = useCallback(() => {
    setSelectedSoftware([]);
    setSelectedConfigs([]);
  }, []);

  // Clear only software
  const clearSoftware = useCallback(() => {
    setSelectedSoftware([]);
  }, []);

  // Clear only configs
  const clearConfigs = useCallback(() => {
    setSelectedConfigs([]);
  }, []);

  const value = useMemo(() => ({
    selectedSoftware,
    selectedConfigs,
    toggleSoftware,
    toggleConfig,
    selectAllInCategory,
    deselectAllInCategory,
    isAllCategorySelected,
    clearAll,
    clearSoftware,
    clearConfigs,
  }), [
    selectedSoftware,
    selectedConfigs,
    toggleSoftware,
    toggleConfig,
    selectAllInCategory,
    deselectAllInCategory,
    isAllCategorySelected,
    clearAll,
    clearSoftware,
    clearConfigs,
  ]);

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};

// Custom hook to use the selection context
export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error('useSelection must be used within SelectionProvider');
  }
  return context;
};
