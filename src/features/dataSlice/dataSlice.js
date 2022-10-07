import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const dataSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    character: {},
    episodeInfo: {},
    loading: false,
  },
  reducers: {
    selectCharacter: (state, action) => {
      state.character = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loading = true
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.characters = action.payload
        state.loading = false
      })
      .addCase(getCharacters.rejected, (state) => {
        state.loading = false
      })
      .addCase(getEpisode.fulfilled, (state, action) => {
        state.episodeInfo = action.payload
      })
  },
})

export const getCharacters = createAsyncThunk('characters/get', async (_, { rejectWithValue }) => {
  try {
    const allCharacters = []
    let getData = true
    for (let i = 1; getData === true; i++) {
      const characters = await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`)
      allCharacters.push(...characters.data.results)
      if (characters.data.info.next === null) {
        getData = false
      }
    }
    return allCharacters
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const getCharacter = createAsyncThunk('character/get', async (id, { rejectWithValue, dispatch }) => {
  try {
    const character = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    dispatch(selectCharacter(character.data))
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const getEpisode = createAsyncThunk('episode/get', async (url, { rejectWithValue }) => {
  try {
    const episode = await axios.get(url)
    return episode.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const { selectCharacter } = dataSlice.actions
export const dataState = (state) => state.data

export default dataSlice.reducer
