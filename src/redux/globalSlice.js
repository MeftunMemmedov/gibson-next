import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts=createAsyncThunk("getProducts", async()=>{
    const {data}= await axios.get('https://bvucjugnfmiwylvzjbfg.supabase.co/rest/v1/Guitars?select=*',
    {
        headers:{
            apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2dWNqdWduZm1pd3lsdnpqYmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNDk3NjEsImV4cCI6MjAyMjYyNTc2MX0.0mT_woheBI69jpBoO_kXeFiCytD21EVL6TJeqec91dg',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2dWNqdWduZm1pd3lsdnpqYmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNDk3NjEsImV4cCI6MjAyMjYyNTc2MX0.0mT_woheBI69jpBoO_kXeFiCytD21EVL6TJeqec91dg',
        }        
    }
)   

    return data
    }
)

export const globalSlice=createSlice({
    name:"global",
    initialState:{
        products:[],
        darkMode:localStorage.getItem('darkmode')?JSON.parse(localStorage.getItem('darkmode')):false,
    },
    reducers:{
        toggleDarkMode:(state)=>{
            state.darkMode=!state.darkMode
            localStorage.setItem('darkmode',state.darkMode)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled, (state, action)=>{
            state.products=action.payload
        })
    }
})

export const {toggleDarkMode}=globalSlice.actions

export default globalSlice.reducer