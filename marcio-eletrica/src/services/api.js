// src/api.js
import supabase from './supabase'

// Function to get all todos
const getAllArticles = async () => {
  const { data, error } = await supabase.from('articles').select('*')

  if (error) {
    console.error('Error fetching articles:', error)
    return []
  }
  return data
}

export default getAllArticles
